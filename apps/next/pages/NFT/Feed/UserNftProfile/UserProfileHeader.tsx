import Image from 'next/image'
import React from 'react'
import { WalletConnect } from '../../../WalletConnect/WalletConnect'
import styles from "../../NftCss/Feed/UserNftProfile/UserprofileHeader.module.css"
const UserProfileHeader = () => {
  return (
    <div  className={styles.UserProfileHeader}>
      <div className={styles.UserProfileHeader_Top}>
      <Image  
        src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
        width={38}
        height={38}
        objectFit="cover"
        />
        <p>Ethscan</p>
      </div>
      <div className={styles.UserProfileHeader_Middle}>
      <input type={'text'} className={styles.UserProfileHeader_Middle_Input}  placeholder="Search by collections, NFT or user "  />
      </div>
      <div className={styles.UserProfileHeader_Bottom}>
        <WalletConnect/>
      </div>
      
    </div>
  )
}

export default UserProfileHeader