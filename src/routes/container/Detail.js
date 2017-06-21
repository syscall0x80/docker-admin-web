import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import { Modal, Button, Spin, Row, Col } from 'antd'
import ContainerForm from '../../components/container/ContainerForm';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.container.runContainer !== this.props.container.runContainer) {

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
    const container = this.props.container.detailContainer;
    if (!container || container.Id !== this.props.params.id) {
      return (
        <Row>
          <Col span={4} offset={10}>
            {
              this.props.loading.effects['container/runContainer'] ? <Spin tip="Waiting..."/> : null
            }
          </Col>
        </Row>
      )
    }
    return (
      <div>
      <div>
        name: {container.Name.slice(1)}
      </div>
      <div>
        image: {container.Image}
      </div>
      </div>
    )
  }
}


export default connect((state) => (state))(Detail);
