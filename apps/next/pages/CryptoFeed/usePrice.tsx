import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAnalytics2 } from '../features/Analytics'
interface Props{
  data:any
}
const usePrice = (data:any) => {
  const analyticData2=useSelector(selectAnalytics2)
  const Coin= analyticData2[analyticData2.length-1]
  const [priceI,setPrice]=useState([])
  useEffect(()=>{
        Coin.map((value:any,index:number)=>
        {
           data.map((item:any)=>{
           setPrice(item.id===value.id?item.current_price:null)
           })
        }
        )
  },[])
  return {
    priceI
  }
}

export default usePrice