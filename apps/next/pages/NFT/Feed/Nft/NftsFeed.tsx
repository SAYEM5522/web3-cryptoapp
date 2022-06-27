import React, { useCallback } from 'react'
import NftHeader from '../../Header/NftHeader'
import NftCollection from './NftCollection'
import styles from "../../NftCss/Feed/Nft/NftCollection.module.css"
import { NftCollection as Collection } from '../../../Data'
import Nftsearch from '../Explore/Nftsearch'
import NftShortProfile from './NftShortProfile'
const NftsFeed = () => {
  const [open,setOpen]=React.useState(false)
  const OpenSearchTerm=useCallback(()=>{
       setOpen(!open)
  },[open])
  return (
    <div style={{flex:0.82}} className={styles.NftFeed}>
        <NftHeader/>
      <div  style={{marginTop:"10px"}} className={styles.NftFeed_Search} onClick={OpenSearchTerm}>
        <Nftsearch/>
        </div>
        {
          open?
          <div>
          <NftShortProfile />   
          </div>
          :null
        }
      
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