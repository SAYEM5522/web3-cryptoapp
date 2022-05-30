import React from 'react'
import styles from "../Css/TopToken/TopToken.module.css"
import { WalletConnect } from '../WalletConnect/WalletConnect'
import Token from './Token'
const TopToken = () => {
  return (
    <div className={styles.TopToken}>
      <WalletConnect top={20} left={80}/>
      <Token/>
    </div>
  )
}

export default TopToken