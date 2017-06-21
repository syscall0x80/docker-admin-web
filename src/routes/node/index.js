import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import {Row, Col, Card, Button} from 'antd'
import List from './List';

class Node extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <List/>
      </div>
    )
  }
}



Node.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Node);
