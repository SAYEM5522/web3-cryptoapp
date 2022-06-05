import React from 'react'
import NftHeader from './Header/NftHeader'
import styles from "../Nft/NftCss/NftFeed.module.css"
const NftFeed = () => {
  return (
    <div className={styles.NftFeed}>
      <NftHeader/>
    </div>
  )
}

export default NftFeed