import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnalytics, selectAnalytics2, selectTokenId, setAnalytics2, setCurrentPrice } from '../features/Analytics'
import styles from "../Css/CryptoFeed/AllAssets.module.css"
interface Props {
  data : any
}
const AllAssets = ({data}:Props) => {
  const dispatch=useDispatch();
  const t_id=useSelector(selectTokenId)
  
  useEffect(() => {
      dispatch(setAnalytics2(data))
      // dispatch(setCurrentPrice({
      //   current_price:data.map((item:any)=>{
      //   console.log(item.id===t_id?item.current_price:null)
      //   }),
      // }))
      
  }, [])

  return (
    <div>
 {
        data.map((item:any,index:number)=>{
            // dispatch(setCurrentPrice({
            //   current_price:t_id===item.id?item.current_price:null,
            // }))
         
          return(
            <div key={index} className={styles.Assests}>
              <Image
                 src={item.image}
                  width={35}
                  height={35}
                  alt={item.name}
                  objectFit="cover"
                  className='trending_img'
                  layout='fixed'
                
                 />
                 <div className={styles.Assests_Des}>
                 <p>{item.name}</p>
                 <p style={{marginTop:"-10px"}}>{item.symbol.toUpperCase()}</p>
                 </div>
            </div>
          )
        })
      }
        </div>
  )
}

export default AllAssets