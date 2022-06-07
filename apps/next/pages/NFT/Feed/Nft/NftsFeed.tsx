import React from 'react'
import NftHeader from '../../Header/NftHeader'
import NftCollection from './NftCollection'
import styles from "../../NftCss/Feed/Nft/NftCollection.module.css"

const NftsFeed = () => {
  return (
    <div style={{flex:0.82}} className={styles.NftFeed}>
      <NftHeader/>
      <NftCollection/>
      <NftCollection/>
      <NftCollection/>
      <NftCollection/>

    </div>
  )
}

export default NftsFeed