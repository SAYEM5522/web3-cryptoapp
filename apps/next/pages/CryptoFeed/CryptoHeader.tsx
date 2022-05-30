import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../Css/CryptoFeed/CryptoHeader.module.css'
import {BiSearch} from "react-icons/bi"
const CryptoHeader = () => {
  const [search,setSearch]=useState('')
  return (
    <div className={styles.CryptoHeader}>
      <div className={styles.CryptoHeader_Details}>
      <Image 
      src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
      width={45}
      height={45}
      objectFit="cover"
      />
      <div className={styles.CryptoHeader_Des}>
        <p className={styles.CryptoHeader_Title}>Bitcoin</p>
        <p className={styles.CryptoHeader_Title2}>
          BDT 
          <span className={styles.Price1}> 2,688,873</span>
          <sup className={styles.Price2}>.80</sup>  
          </p>
      </div>
      </div>
    
      <div style={{position:"relative"}}>
        <input type={'text'} className={styles.Input} placeholder="Search Tokens or Coins"/>
        <BiSearch className={styles.Icon} size={32}/>
      </div>
    </div>
  )
}

export default CryptoHeader