import React from 'react'
import NftHeader from './Header/NftHeader'
import styles from "../Nft/NftCss/NftFeed.module.css"
import Explore from './Feed/Explore/Explore'
const NftFeed = () => {
  return (
    <div className={styles.NftFeed}>
     <Explore/>
    </div>
  )
}

export default NftFeed