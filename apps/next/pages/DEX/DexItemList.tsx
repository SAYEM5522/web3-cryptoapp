import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "../Css/PoolCss/DexItemList.module.css"
const DexItemList = () => {
  const [data,setData]=useState([])
  const getData=async()=>{
    await axios.get("https://api.coingecko.com/api/v3/exchanges?page=1").then((res)=>{
     setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getData(),
    ()=>getData()
  },[])
  return (
    <div className={styles.DexItemList} style={{width:"200px",position:"relative"}} >
      
      {
        data.map((item:any,index)=>{
          return(
          //  <div style={{width:"200px",position:"relative"}} >
            <div key={index} className={styles.Assests} >
              <div>
            <Image
               src={item.image}
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
          // </div>
          )
        })
      }
    </div>
  )
}

export default DexItemList