import React, { Component } from 'react';
import { Form, Input, Radio, Icon, Cascader, Select, Row, Col, Checkbox, Button, Modal } from 'antd';
const FormItem = Form.Item;
import { DOCKER_NETWORK_MODE } from '../../constants';

class ContainerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkMode: DOCKER_NETWORK_MODE.BRIDGE.value,
      ports: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const params= {};
        params.image= values.image;
        params.network_mode = this.state.networkMode;
        params.ports = this.getBindPorts();
        this.props.handleSubmit(params);
      }
    });
  };

  getBindPorts = () => {
    const res = {};
    Object.values(this.state.ports).map(portPeer => {
      const host = portPeer.split(':')[0];
      const container = portPeer.split(':')[1];
      res[container] = host;
    });
    return res;
  };

  handleNetworkModeChange = (networkMode) => {
    this.setState({
      networkMode,
    });
  };

  handleBindPort = (key, value) => {
    if (!value) {
      value = '';
    }
    this.setState({
      ports: Object.assign({}, this.state.ports, {
        [key]: value,
      })
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    const genNetworkConfigFrom = (mode) => {
      if (mode !== DOCKER_NETWORK_MODE.BRIDGE.value) {
        return null;
      }
      return (
        <div>
          {
            Object.keys(this.state.ports).map(key => {
              const portPeer = this.state.ports[key];
              return (
                <FormItem
                  key={key}
                  {...formItemLayout}
                  label={key}
                  hasFeedback
                >
                  {getFieldDecorator(key, {
                    rules: [{
                      required: true, message: 'Please input bind port!',
                    },
                    ],
                    initialValue: portPeer,
                  })(
                    <Input
                      onChange={(e) => this.handleBindPort(key, e.target.value)}
                     />
                  )}
                </FormItem>
              )
            })
          }
          {
            Object.keys(this.state.ports).length ? null :
              <FormItem
                {...formItemLayout}
                label={`bind${Object.keys(this.state.ports).length}`}
                hasFeedback
              >
                {getFieldDecorator('ports', {
                  rules: [{
                    required: true, message: 'Please input bind port!',
                  }],
                })(
                  <Input
                    onChange={(e) => this.handleBindPort(`bind${Object.keys(this.state.ports).length}`, e.target.value)}
                    placeholder="host:container, eg: 8080:80"
                  />
                )}
              </FormItem>
          }
          <Row>
            <Col span={6} offset={6}>
              <Button
                onClick={() => this.handleBindPort(`bind${Object.keys(this.state.ports).length}`)}
                shape="circle"
                icon="plus"
                type="primary"
              />
            </Col>
          </Row>
        </div>
      )
    };

    return (
      <Form onSubmit={this.onSubmit}>
        <FormItem
          {...formItemLayout}
          label="Image"
          hasFeedback
        >
          {getFieldDecorator('image', {
            rules: [{
              required: true, message: 'Please input docker image!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Network model"
          {...formItemLayout}
        >
          <Radio.Group defaultValue={this.state.networkMode} onChange={(e) => this.handleNetworkModeChange(e.target.value)}>
            {
              Object.values(DOCKER_NETWORK_MODE).map(mode => {
                return (
                  <Radio.Button key={mode.value} value={mode.value}>{mode.value}</Radio.Button>
                )
              })
            }
          </Radio.Group>
        </FormItem>
        {
          genNetworkConfigFrom(this.state.networkMode)
        }
        <br/>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Run</Button>
        </FormItem>
      </Form>
    );
  }
}

ContainerForm.PropTypes = {
  handleSubmit: React.PropTypes.func.required,
};

export default Form.create()(ContainerForm);
