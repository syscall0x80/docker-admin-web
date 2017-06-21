import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import { Modal, Radio, Spin, Row, Col, notification } from 'antd'
import ContainerForm from '../../components/container/ContainerForm';

class Run extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.container.runContainer !== this.props.container.runContainer) {
      notification.success({
        message: 'Success',
        description: 'A container run success',
      });
      this.props.dispatch(routerRedux.push(`/container`));
    }
    this.props = nextProps;
  }

  handleSubmit = (data) => {
    this.props.dispatch({
      type: 'container/runContainer',
      payload: data,
    });
  };

  render () {
    return (
      <div>
      <Row>
        <Col span={4} offset={10}>
          {
            this.props.loading.effects['container/runContainer'] ? <Spin tip="Waiting..."/> : null
          }
        </Col>
      </Row>
      <ContainerForm
          handleSubmit={(data) => this.handleSubmit(data)}
        />
      </div>
    )
  }
}


export default connect((state) => (state))(Run);
