import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'

class Volume extends Component {
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



Volume.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Volume);
