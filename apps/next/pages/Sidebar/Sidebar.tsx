import Image from 'next/image'
import React from 'react'
import styles from "../Css/Sidebar/Sidebar.module.css"
import {IoMdSwap} from "react-icons/io"
import {FiActivity} from "react-icons/fi"
import {BiTrendingUp} from "react-icons/bi"
import {FaBuffer} from "react-icons/fa"
import {AiOutlineAppstore} from "react-icons/ai"
import IconName from './IconName'
// IoMdSwap->swap
// AiOutlineAppstore->home
// BiTrendingUp ->gainer
// BiTrendingDown ->loser
// FiActivity->analytics
// FaBuffer->pool
const Icon=[
  {
    id:1,
    icon:AiOutlineAppstore,
    name:"Home",

  },
  {
    id:2,
    icon:FiActivity,
    name:"Analytics",
    
  },
  {
    id:3,
    icon:IoMdSwap,
    name:"Swap",
    
  },
  {
    id:4,
    img:true,
    
  },
  {
    id:5,
    icon:FaBuffer,
    name:"Pool",
    
  },
  {
    id:6,
    icon:BiTrendingUp,
    name:"Gainer",
    
  }
]
const Sidebar = () => {

  

  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar_Top} >
        <Image  
        // src="/../public/Logo.png"
        src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
        width={38}
        height={38}
        objectFit="cover"
        />
        <p>Coinbase</p>
      </div>
      <div>
        {
          Icon.map((item,index)=>{
            if(item.img){
              return(
                <div className={styles.Sidebar_Item}>
                  <Image
                  src={'/../public/nft.png'}
                  width={35}
                  height={35}
                  objectFit="fill"
                  />
                  <p>Nft</p>
                  </div>
              )

            }
            else{
              return(
                <div className={styles.Sidebar_Item}>
                  <IconName Icon={item.icon}/>
                  <p>{item.name}</p>
                </div>
              )
            }
          })
        }
      </div>

      </div>
  )
}

export default Sidebar