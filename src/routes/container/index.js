import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import {Row, Col, Card, Button} from 'antd'
import List from './List';
import NewContainer from './Run';

class Container extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    )
  }
}



Container.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Container);
