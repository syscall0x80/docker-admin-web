import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import List from './List';

class Image extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch({type: 'image/getImages'});
  }

  render () {
    return (
      <div className='content-inner'>
        <List/>
      </div>
    )
  }
}



Image.propTypes = {
  dashboard: PropTypes.object
};

export default connect((state) => (state))(Image);
