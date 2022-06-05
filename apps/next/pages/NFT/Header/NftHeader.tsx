import React from 'react'
import styles from "../NftCss/Header/NftHeader.module.css"
const item=[
  {
    id:1,
    title:"EXPLORE",
  },
  {
    id:2,
    title:"STATS",
  },
  {
    id:3,
    title:"NFT",
  },
  {
    id:4,
    title:"PROFILE",
  }
]
const NftHeader = () => {
  return (
    <div className={styles.NftHeader}>
      {
        item.map((item,inedx)=>{
          return(
            <div className={styles.NftHeader_Item} key={item.id} >
              {item.title}
            </div>
          )
        })
      }
    </div>
  )
}

export default NftHeader