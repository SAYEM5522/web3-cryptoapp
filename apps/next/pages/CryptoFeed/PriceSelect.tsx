import React, { useCallback, useEffect, useState } from 'react'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnalytics, selectAnalytics2, selectCountryName, selectTokenId, selectTokenIndex, selectTokenName, setAnalytics, setCountryName, setCurrentPrice } from '../features/Analytics'
import axios from 'axios'
import { css } from "@emotion/react";
import { HashLoader } from 'react-spinners'
import usePrice from './usePrice'
interface Props {
  data : any
}
const PriceSelect = ({data}:Props) => {
  const PriceData = useSelector(selectAnalytics)
  const countryID=useSelector(selectCountryName)
  const dispatch=useDispatch()
  const TokenIndex=useSelector(selectTokenIndex)
  const analyticData2=useSelector(selectAnalytics2)
  const TokenId=useSelector(selectTokenId)
  const [loading,setLoading]=useState(true)
  const [price,setPrice]=useState([])
 const CoinItem= analyticData2[analyticData2.length-1]
const getData=async()=>{
  await axios.get('https://api.coingecko.com/api/v3/coins')
  .then(res=>{
    // dispatch(setAnalytics(res.data))
    setPrice(res.data)
    setLoading(false)
  })
  .catch(err=>console.log(err))
 
}
useEffect(()=>{
  getData(),
  ()=>getData()
},[])
// console.log(Object?.keys(price.map((item:any) => item.market_data.current_price)[0]))
//  const currentPrice= PriceData[0]?.map((item:any) => item.market_data.current_price)[0][countryID]
const [open, setOpen] = useState(false)
  const onClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  const override = css`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  top:40%
`;
const PriceChange=()=>{
  data?.map((item:any,index:number)=>{
      data?.map((list:any,index:number)=>
        (list.id===item.id)
      )   
})}
console.log( CoinItem?.map((list:any,index:number)=>
(TokenId===list.id)?list.current_price:null))
  
// const PriceId=Object?.keys(price.map((item:any) => item.market_data.current_price)[0]);
  return (
    <div style={{ position: "relative" }}>
     
      <div className={styles.CryptoFeed_Select} onClick={onClick} >
        <p className={styles.CryptoFeed_Select_Title}>{countryID.toUpperCase()}</p>
        <IoIosArrowDown size={25} color='white' className={styles.CryptoFeed_Select_Icon} />
      </div>
      {
        open ?
          <div className={styles.States_Country}>

     {
        loading?
        <div style={{height:"350px",width:"97%"}}>
        <HashLoader color={"red"} css={override} loading={loading} size={105}  />
        </div>
        :
        <>
          {
              Object?.keys(price.map((item:any) => item.market_data.current_price)[0]).map((item: any, index: number) => {
                const Select=()=>{
                  dispatch(setCountryName({
                    name:item
                  }))
                  dispatch(setCurrentPrice(
                    {
                      current_price:
                     
                        CoinItem?.map((list:any,index:number)=>
                          (TokenId===list.id)?list.current_price:null)
                       
                      // PriceData[0]?.map((item:any) => item.market_data.current_price)[TokenIndex][item]
                  
                })
                  )
                }

                 
                return (
                  <div key={index} onClick={Select}
                    >
                    <p className={styles.States_Country_Name}>{item}</p>
                  </div>
                )
              })
             
            }
        </>
      }



          
               
          </div>
          : null
      }
      {/* <div style={{height:"0.5px"}}>
       {
         data.map((item:any,index:number)=>{
           dispatch(setCurrentPrice({
            current_price:item.current_price
           }))
               return(
                 <div key={index}/>
               )
         })
       }
      </div> */}
    </div>
  )
}

export default PriceSelect