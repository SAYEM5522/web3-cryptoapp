import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "../Css/SwapCss/SwapList.module.css"
const SwapList = () => {
  const [TokenList, setTokenList] = useState<any>([])
  const UrlList=[
    "https://api.coinmarketcap.com/data-api/v3/uniswap/all.json",
    "https://tokens.coingecko.com/uniswap/all.json"
  ]
  const getData=async()=>{
     UrlList.map((url)=>{
     await axios.get(url).then((res)=>{
        setTokenList([...TokenList,res.data.tokens])
      }).catch((err)=>{
        console.log(err)
      }
      )
    
     })
  }
  useEffect(()=>{
    getData(),
    ()=>getData()
  },[])
  return (
    <div >
      {
        TokenList.map((item:any,index:number)=>{
         return item.map((value:any,index:number)=>{
           return (
              <div key={index}>
                <p>{value.symbol}</p>
              </div>
            )
         })
        })
      }
    </div>
  )
}

export default SwapList