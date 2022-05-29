import React from 'react'
import styles from "../Css/TopToken/TopToken.module.css"
import { WalletConnect } from '../WalletConnect/WalletConnect'
const TopToken = () => {
  return (
    <div className={styles.TopToken}>
      <WalletConnect top={10} left={80}/>
    </div>
  )
}

export default TopToken