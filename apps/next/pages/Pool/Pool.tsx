import React from 'react'
import CryptoFeed from '../CryptoFeed/CryptoFeed'
import styles from "../Css/PoolCss/Pool.module.css"
import Sidebar from '../Sidebar/Sidebar'
const Pool = () => {
  return (
    <div>
      <div className={styles.Home_container}>
      <Sidebar/>
      <CryptoFeed/>
      </div>
    </div>
  )
}

export default Pool