import React from 'react'
import styles from "../Css/CryptoFeed/CryptoFeed.module.css"
import AllAssets from './AllAssets'
import CryptoGraph from './CryptoGraph'
import CryptoHeader from './CryptoHeader'
import CryptoStats from './CryptoStats'
const CryptoFeed = () => {
  return (
    <div className={styles.CryptoFeed}>
      <CryptoHeader/>
      <CryptoGraph/>
        <CryptoStats/>
        <AllAssets/>
      </div>
  )
}

export default CryptoFeed