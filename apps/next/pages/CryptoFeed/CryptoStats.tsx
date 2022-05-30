import React from 'react'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import PriceSelect from './PriceSelect'
const CryptoStats = () => {
  return (
    <>
    <PriceSelect/>
    <div className={styles.CryptoFeed_Stats}>
      <p className={styles.CryptoStats_Caption} >Market stats</p>
    </div>
    </>
  )
}

export default CryptoStats