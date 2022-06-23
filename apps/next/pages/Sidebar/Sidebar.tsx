import Image from 'next/image'
import React, { useCallback, useState } from 'react'
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
import { useWindowSize } from '../useWindowSize'

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
    name:"DEX",
    
  },
  {
    id:6,
    icon:BiTrendingUp,
    name:"Gainer",
    
  },
  {
    id:7,
    icon:BiTrendingUp,
    name:"GenerateNFT",
    
  }
]
const Sidebar = () => {
      const {width,height}=useWindowSize();
      const router=useRouter();
      const dispatch=useDispatch()
      const [cureentIndex,setCurrentIndex]=useState(0);
      const sidebarIndex=useSelector(selectsidebarindex)
    
     
  return (
    <div className={styles.Sidebar} 
 
    >
      <div className={styles.Sidebar_Top} >

        
        <Image  
        // src="/../public/Logo.png"
        src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
        width={38}
        height={38}
        objectFit="cover"
        />
        
        <p  >Ethscan</p>

      </div>
      <div 
     className={styles.Sidebar_List}
      >
        {
          Icon.map((item,index)=>{

            const DifferentRoute=(name:any,index:number)=>{
              dispatch(setSidebarIndex({
                sidebarIndex:index
              }))
              // setCurrentIndex(index)
                if(name==="Home"){
                  router.push("/");
                }
                else{
                  router.push({
                    pathname:`/${name}/${name}`
                  })
                }
              
            }
            
              return(
                <div key={index} style={{
                  "backgroundColor":(index===sidebarIndex)?"#60bd8a":"#262C3A",
                  "color":(index===sidebarIndex)?"black":"white",
                   "borderRadius":"25px",
                   "width":"140px",
                }} className={styles.Sidebar_Item} onClick={()=>DifferentRoute(item.name,index)}>
                  <IconName Icon={item.icon} 
                  
                  />
                  <p 
                       >{item.name}</p>
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