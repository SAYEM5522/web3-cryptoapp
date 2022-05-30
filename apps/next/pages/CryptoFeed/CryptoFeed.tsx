import React from 'react'
import styles from "../Css/CryptoFeed/CryptoFeed.module.css"
import AllAssets from './AllAssets'
import CryptoHeader from './CryptoHeader'
import CryptoStats from './CryptoStats'
const CryptoFeed = () => {
  return (
    <div className={styles.CryptoFeed}>
      <CryptoHeader/>
        <CryptoStats/>
      <AllAssets/>
      </div>
  )
}

export default CryptoFeed