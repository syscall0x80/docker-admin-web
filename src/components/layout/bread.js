import React, { Component, PropTypes } from 'react'
import { Breadcrumb, Icon } from 'antd'
import styles from './main.less'

class Bread extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    const pathNames = location.pathname.substr(1).split('/');
    return (
      <div className={styles.bread}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a onClick={() => this.props.push('/')}>
              <Icon type='home' />
              <span>Home</span>
            </a>
          </Breadcrumb.Item>
          {
            pathNames.map((item, index) => {
              return (
                <Breadcrumb.Item key={item} >
                  <a onClick={() => this.props.push(`/${pathNames.slice(0, index + 1).join('/')}`)} >
                    <span>{item}</span>
                  </a>
                </Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
      </div>
    )
  }
}

Bread.propTypes = {
  location: PropTypes.object,
  push: PropTypes.func,
};

export default Bread
