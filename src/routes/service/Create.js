import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import { Modal, Button} from 'antd'

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContainer: false,
    };
    this.handleNewContainer = this.handleNewContainer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewContainer = () => {
    this.setState({
      newContainer: !this.state.newContainer,
    });
  };

  handleSubmit = (data) => {
    this.props.dispatch({
      type: 'container/runContainer',
      payload: data,
    });
  };

  render () {
    return (
      <div>
        Create service
      </div>
    )
  }
}


export default connect((state) => (state))(Create);
