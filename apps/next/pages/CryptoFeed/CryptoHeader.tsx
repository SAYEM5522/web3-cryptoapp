import Image from 'next/image'
import React from 'react'
import styles from '../Css/CryptoFeed/CryptoHeader.module.css'
import {BiSearch} from "react-icons/bi"
const CryptoHeader = () => {
  return (
    <div className={styles.CryptoHeader}>
      <Image 
      src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
      width={45}
      height={45}
      objectFit="cover"
      />
      <div style={{position:"relative"}}>
        <input type={'text'} className={styles.Input} placeholder="Search Tokens or Coins"/>
        <BiSearch className={styles.Icon} size={32}/>
      </div>
    </div>
  )
}

export default CryptoHeader