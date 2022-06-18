import React from 'react'
import NftHeader from '../../Header/NftHeader'
import NftCollection from './NftCollection'
import styles from "../../NftCss/Feed/Nft/NftCollection.module.css"
import { NftCollection as Collection } from '../../../Data'
const NftsFeed = () => {
  return (
    <div style={{flex:0.82}} className={styles.NftFeed}>
      <NftHeader/>
      {
        Collection.map((item,index)=>{
            return(
              <NftCollection item={item}/>
            )
        })
      }

    </div>
  )
}

export default NftsFeed