import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "../Css/PoolCss/DexPair.module.css"
import DexFeed from './DexFeed'
const DexPair = () => {
  const [data,setData]=useState([])
  const router=useRouter()
  const {id}=router.query
  const getData=async()=>{
    await axios.get(`https://api.coingecko.com/api/v3/exchanges/${id}/tickers?include_exchange_logo=true&page=1&depth=depth`).then((res)=>{
      setData(res.data.tickers)
      console.log(res.data.tickers)
    }).catch((err)=>{console.log(err)})
}
useEffect(()=>{
  getData(),
  ()=>getData()
},[id])
  return (
    <div className={styles.DexPair}>
     <div className={styles.DexFeed_Header}>
       <p >#</p>
       <p>Coin</p>
       <p>Pair</p>
       <p>Price</p>
       <p>Spread</p>
       <p>Volume</p>
       <p>Last Trade</p>



      </div>
     {
        data.map((item:any,index)=>{
          return(
            <div className={styles.DexPair_Des} >
              <p className={styles.DexPair_Des_Index}>{index+1}</p>
              <div>
              <p className={styles.DexPair_Des_Coin}>{item.coin_id}</p>
             
              </div>
             <p className={styles.DexPair_Des_Pair}>{item.coin_id}/{item.target_coin_id}</p>
             <p className={styles.DexPair_Des_Price}>{item.last}</p>
             <p>{item.bid_ask_spread_percentage.toFixed(4)}</p>
             <p>{item.volume.toFixed(2)}</p>
             <p>{item.last_traded_at}</p>


            </div>
          )
        })
     }
    </div>
  )
}

export default DexPair