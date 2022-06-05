import React from 'react'
import NftHeader from '../../Header/NftHeader'
import ExploreList from './ExploreList'
import styles from "../../NftCss/Feed/Explore/ExploreFeed.module.css"
const NftItem=[
  {
    id:1,
    title:"Trending",
  },
  {
    id:2,
    title:"Art",
  },{
    id:3,
    title:"Music",
  },{
    id:4,
    title:"Top",
  },{
    id:5,
    title:"New",
  },{
    id:6,
    title:"Sports",
  },{
    id:7,
    title:"Utilities",
  },{
    id:8,
    title:"Photography",
  },
]
const ExploreFeed = () => {
  return (
    <div style={{flex:0.82}} className={styles.ExploreFeed}>
      <NftHeader/>
     {
        NftItem.map((item,index)=>{
            return(
              <ExploreList key={index} title={item.title}/>
            )
        })
     }
    </div>
  )
}

export default ExploreFeed