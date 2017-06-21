import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='content-inner'>
        Hello User!
      </div>
    )
  }
}



Users.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Users);

