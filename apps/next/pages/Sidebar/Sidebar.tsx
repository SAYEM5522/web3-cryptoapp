import Image from 'next/image'
import React, { useCallback } from 'react'
import styles from "../Css/Sidebar/Sidebar.module.css"
import {IoMdSwap} from "react-icons/io"
import {FiActivity} from "react-icons/fi"
import {BiTrendingUp} from "react-icons/bi"
import {FaBuffer} from "react-icons/fa"
import {AiOutlineAppstore} from "react-icons/ai"
import {MdPolymer} from "react-icons/md"
import IconName from './IconName'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectsidebarindex, setSidebarIndex } from '../features/SideBarfeatures'
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
    icon:MdPolymer,
    name:"NFT"
    
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
      const router=useRouter();
      const dispatch=useDispatch()
      const sidebarIndex=useSelector(selectsidebarindex)
      // const DifferentRoute=useCallback((name,index)=>{
      //   dispatch(setSidebarIndex({
      //     sidebarIndex:index
      //   }),
      //   return(()=>{
      //     if(name==="Home"){
      //       router.push("/");
      //     }
      //     else{
      //       router.push({
      //         pathname:`/${name}/${name}`
      //       })
      //     }
        
      //   })
      // },[])

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
        <p>Ethbase</p>
      </div>
      <div>
        {
          Icon.map((item,index)=>{

            const DifferentRoute=useCallback((name,index)=>{
              dispatch(setSidebarIndex({
                sidebarIndex:index
              }))
              // return(()=>{
                if(name==="Home"){
                  router.push("/");
                }
                else{
                  router.push({
                    pathname:`/${name}/${name}`
                  })
                }
              
              // })
            },[])

            // if(item.img){
            //   return(
            //     <div key={index} className={styles.Sidebar_Item} onClick={()=>router.push("/NFT/Nft")}>
            //       <Image
            //       src={'/../public/nft.png'}
            //       width={35}
            //       height={35}
            //       objectFit="fill"
            //       />
            //       <p>Nft</p>
            //       </div>
            //   )
            // }
            
              return(
                <div key={index} style={{"backgroundColor":(index===sidebarIndex)?"red":"#262C3A",
                "borderRadius":"25px","width":"140px"}} className={styles.Sidebar_Item} onClick={()=>DifferentRoute(item.name,index)}>
                  <IconName Icon={item.icon}/>
                  <p>{item.name}</p>
                </div>
              )
            }
          )
        }
      </div>

      </div>
  )
}

export default Sidebar