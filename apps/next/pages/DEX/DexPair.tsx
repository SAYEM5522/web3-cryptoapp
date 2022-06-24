import React from 'react'
import styles from "../Css/PoolCss/DexPair.module.css"
import DexFeed from './DexFeed'
const DexPair = () => {
  return (
    <div className={styles.DexPair}>
      <DexFeed/>
    </div>
  )
}

export default DexPair