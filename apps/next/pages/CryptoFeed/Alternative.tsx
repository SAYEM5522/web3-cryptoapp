import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnalytics2, selectCountryName, selectTokenId, setAnalytics2, setCurrentPrice } from '../features/Analytics'
import AllAssets from './AllAssets'
import CryptoGraph from './CryptoGraph'
import CryptoHeader from './CryptoHeader'
import CryptoStats from './CryptoStats'
const Alternative = () => {
  const dispatch=useDispatch()
  const [data,setData]=useState([])
  const moneyInitial=useSelector(selectCountryName)
  const [loading,setLoading]=useState(true)
  const getData=async()=>{
  await  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${moneyInitial}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`).then(res=>{
    dispatch(setAnalytics2(res.data))
     setData(res.data)
     setLoading(false)
    }).catch
    (err=>console.log(err))
}
useEffect(()=>{
  getData(),
  ()=>getData()
  
  
},[moneyInitial,dispatch])
  return (
    <div>
      {
        loading ? <div>Loading...</div> :
        <div>
      <CryptoHeader data={data} />
      <CryptoGraph/>
      <CryptoStats/>
      <AllAssets data={data}/>
        </div>
      }
    </div>
  )
}

export default Alternative