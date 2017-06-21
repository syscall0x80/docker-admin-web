import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { Modal, Button} from 'antd'
import ContainerForm from '../../components/container/ContainerForm';

class Edit extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (data) => {
    this.props.dispatch({
      type: 'container/editContainer',
      payload: data,
    });
  };

  render () {
    return (
      <div>
        <Button
          onClick={() => this.handleNewContainer()}
          type='primary'
        >
          Edit Container
        </Button>
      </div>
    )
  }
}


export default connect((state) => (state))(Edit);
