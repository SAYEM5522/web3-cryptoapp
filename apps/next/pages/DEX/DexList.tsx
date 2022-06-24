import axios from 'axios'
import React, { useEffect } from 'react'
import AllAssets from '../CryptoFeed/AllAssets'
import styles from "../Css/PoolCss/DexList.module.css"
import DexFeed from './DexFeed'
import DexGraph from './DexGraph'
import DexItemList from './DexItemList'
const DexList = () => {
  const getData=async()=>{
      await axios.get("https://api.coingecko.com/api/v3/exchanges/uniswap/tickers?include_exchange_logo=true&page=1&depth=depth").then((res)=>{
      }).catch((err)=>{console.log(err)})
  }
  useEffect(()=>{
    getData(),
    ()=>getData()
  },[])
  return (
    <div className={styles.DexList}>
      <div style={{width:"72%"}} className={styles.DexItemFeed}>
      <DexGraph/>
       <DexFeed/>
      </div>
     <div className={styles.DexItem}>
     <DexItemList/>
     </div>
    </div>
  )
}

export default DexList