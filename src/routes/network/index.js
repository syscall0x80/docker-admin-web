import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'

class Network extends Component {
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



Network.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Network);
