import React from 'react'
import styles from './main.less'
import { config } from '../../config'

const Footer = () => {
  return (
    <div className={styles.footer}>
      {config.footerText}
    </div>
  )
};

export default Footer
