import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='content-inner'>
        Hello Dashboard!
      </div>
    )
  }
}



Dashboard.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Dashboard);
