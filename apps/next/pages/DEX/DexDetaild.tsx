import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from "../Css/PoolCss/DexDetails.module.css"
import DexPair from './DexPair'
const DexDetaild = () => {
  return (
    <div className={styles.DexDetails}>
      <div style={{flex:0.18}}>
      <Sidebar/>
      </div>
      <div className={styles.DexDetails_Feed} >
        <DexPair/>
      </div>
    </div>
  )
}

export default DexDetaild