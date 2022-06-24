import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../Css/PoolCss/DexItemList.module.css"
import { selectDexList, setCoinId, setDexList } from '../features/DexFeatures'
const DexItemList = () => {
  const [currentIndex,setCurrentIndex]=useState(0)
  const dispatch=useDispatch()
  const DexList=useSelector(selectDexList)
  const getData=async()=>{
    await axios.get("https://api.coingecko.com/api/v3/exchanges?page=1").then((res)=>{
     dispatch(setDexList(res.data))
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getData(),
    ()=>getData()
  },[])
  console.log(DexList)
  return (
    <div className={styles.DexItemList} style={{width:"200px",position:"relative"}} >
      
      {
        DexList[0]?.map((item:any,index:number)=>{
          const ListItem=()=>{
            setCurrentIndex(index)
            dispatch(setCoinId({
              CoinId:item.id
            }))
          }
          return(
            <div key={index} className={styles.Assests} onClick={ListItem} style={{backgroundColor:index===currentIndex?"#262C3A":"transparent"}} >
              <div>
            <Image
               src={item?.image}
                width={35}
                height={35}
                alt={item.name}
                objectFit="cover"
                className='trending_img'
                layout='fixed'
              
               />
               </div>
               <div className={styles.Assests_Des}>
               <p>{item.name}</p>
               </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default DexItemList