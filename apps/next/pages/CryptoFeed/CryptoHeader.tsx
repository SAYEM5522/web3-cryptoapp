import Image from 'next/image'
import React from 'react'
import styles from '../Css/CryptoFeed/CryptoHeader.module.css'
const CryptoHeader = () => {
  return (
    <div className={styles.CryptoHeader}>
      <Image 
      src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
      width={45}
      height={45}
      objectFit="cover"
      />
      <div>
        <input type={'text'} className={styles.Input} placeholder="Search Tokens or Coins"/>
      </div>
    </div>
  )
}

export default CryptoHeader