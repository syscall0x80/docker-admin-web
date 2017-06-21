import React, { PropTypes } from 'react';
import { Icon, Switch } from 'antd';
import styles from './main.less';
import { config } from '../../config';
import Menus from './menu';

function Sider ({ siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys }) {
  const menusProps = {
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys
  };
  return (
    <div>
      <div className={styles.logo}>
        <img src={config.logoSrc} />
        {
          siderFold ? '' : <span>{config.logoText}</span>
        }
      </div>
      <Menus {...menusProps} />
        {
          !siderFold ?
            <div className={styles.switchtheme}>
              <span><Icon type='bulb' /></span>
              <Switch onChange={changeTheme} defaultChecked={darkTheme}/>
            </div>
            : null
        }
    </div>
  )
}

Sider.propTypes = {
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func
};

export default Sider;
