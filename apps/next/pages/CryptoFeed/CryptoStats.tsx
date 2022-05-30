import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import { selectAnalytics, setAnalytics } from '../features/Analytics'
import PriceSelect from './PriceSelect'
const CryptoStats = () => {
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(true)
  const analyticsData=useSelector(selectAnalytics)
const getData=async()=>{
    await axios.get('https://api.coingecko.com/api/v3/coins')
    .then(res=>{
      dispatch(setAnalytics(res.data))
      setLoading(false)
    })
    .catch(err=>console.log(err))
   
}
useEffect(()=>{
    getData(),
    ()=>getData()
},[])
  return (
    <>
    {
      loading?<h1>loading</h1>:
      <>
      <PriceSelect/>
      <div className={styles.CryptoFeed_Stats}>
        <p className={styles.CryptoStats_Caption} >Market stats</p>
      </div>
      </>
    }
   
    </>
  )
}

export default CryptoStats