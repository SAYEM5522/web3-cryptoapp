import React from 'react'
import CryptoFeed from '../CryptoFeed/CryptoFeed'
import styles from "../Css/PoolCss/Pool.module.css"
import Sidebar from '../Sidebar/Sidebar'
import DexGraph from './DexGraph'
import DexList from './DexList'
const DEX = () => {
  return (
    <div>
      <div className={styles.Home_container}>
         <Sidebar/>
          <DexList/>
      </div>
    </div>
  )
}

export default DEX