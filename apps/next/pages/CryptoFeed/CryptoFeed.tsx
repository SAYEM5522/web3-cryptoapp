import React from 'react'
import styles from "../Css/CryptoFeed/CryptoFeed.module.css"
import { useWindowSize } from '../useWindowSize'
import AllAssets from './AllAssets'
import Alternative from './Alternative'
import CryptoGraph from './CryptoGraph'
import CryptoHeader from './CryptoHeader'
import CryptoStats from './CryptoStats'
const CryptoFeed = () => {
  const {width,height}=useWindowSize();

  return (
    <div className={styles.CryptoFeed}
    //  style={{
    //   flex:width<=1000?"0.94":"0.60",
    // }} 
    >
      <Alternative/>
      </div>
  )
}

export default CryptoFeed