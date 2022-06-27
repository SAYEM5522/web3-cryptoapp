import React from 'react'
import styles from "../Css/SwapCss/SwapMiddle.module.css"
import {FiSettings} from "react-icons/fi"
import { WalletConnect } from '../WalletConnect/WalletConnect'
const SwapMiddle = () => {
  return (
    <div style={{flex:"0.78"}}>
      <div>
      <div className={styles.SwapMiddleFeed}>
        <div className={styles.SwapMiddleFeed_Header}>
         <p>Swap</p>
         <FiSettings size={27} color="#fff"/>
        </div>
        <div className={styles.SwapMiddleFeed_Body}>

        </div>
        <div className={styles.SwapMiddleFeed_Bottom}>
          <WalletConnect/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SwapMiddle