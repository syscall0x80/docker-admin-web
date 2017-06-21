import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'

class Service extends Component {
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

Service.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Service);
