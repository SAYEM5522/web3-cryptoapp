import React from 'react'
import NftHeader from '../../Header/NftHeader'
import ExploreList from './ExploreList'
import styles from "../../NftCss/Feed/Explore/ExploreFeed.module.css"
import { NFTPROFILE } from '../../../Data'
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
const NftCollection=[
  {
    id:1,
    img:"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg",
    title:"Art #40560",
    price:0.5,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png",
    ProfileId:1,
    type:"Trending"
  },
  {
    id:2,
    img:"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg",
    title:"Nft Art #40560",
    price:0.8,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png",
    ProfileId:2,
    type:"Art"




  },
  {
    id:3,
    img:"https://www.arweave.net/EXUJt80FIogASexqNQojt5gNCW243w5m_u782ZlIXck?ext=png",
    title:"Faceless Nft #43580",
    price:0.001,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png",
    ProfileId:3,
    type:"Music"
    


  },
  {
    id:4,
    img:"https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2021/03/18143417/artofcybersecurity_banking_1920x1080.jpg",
    title:"The world of nft",
    price:0.35,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png",
    ProfileId:4,
    type:"Top"



  },
  {
    id:5,
    img:"https://www.arweave.net/EXUJt80FIogASexqNQojt5gNCW243w5m_u782ZlIXck?ext=png",
    title:"Faceless Nft #43580",
    price:0.5,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png",
    ProfileId:5,
    type:"New"



  },
  {
    id:6,
    img:"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg",
    title:"Art #40560",
    price:0.59,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png",
    ProfileId:6,
    type:"New"


  },
  {
    id:7,
    img:"https://www.arweave.net/EXUJt80FIogASexqNQojt5gNCW243w5m_u782ZlIXck?ext=png",
    title:"Art #40560",
    price:0.100,
    bid:0.8,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png",
    ProfileId:5,
    type:"Top"


  },

]
const ExploreFeed = () => {
  return (
    <div style={{flex:0.82}} className={styles.ExploreFeed}>
      <NftHeader/>
     {
        NftItem.map((item,index)=>{
            return(
              <ExploreList key={index} title={item.title} data={NftCollection} />
            )
        })
     }
    </div>
  )
}

export default ExploreFeed