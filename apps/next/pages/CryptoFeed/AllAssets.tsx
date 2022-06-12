import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectGainerIndex, selectTokenId, setAnalytics2, setCurrentPrice, setMarket, setTokenId, setTokenIndex, setTokenName } from '../features/Analytics'
import styles from "../Css/CryptoFeed/AllAssets.module.css"
interface Props {
  data : any
}
const AllAssets = ({data}:Props) => {
  const dispatch=useDispatch();
  const t_id=useSelector(selectTokenId)
  const GainerIndex=useSelector(selectGainerIndex)

  return (
    <div className={styles.All_Assests}>
 {
        data.map((item:any,index:number)=>{
            const Select=()=>{
              dispatch(setTokenIndex(index)),
                dispatch(setTokenName({
                  TokenName:item.name,
                  Tokenimg:item.image
                })),
                dispatch(
                  setCurrentPrice({
                    current_price:item.current_price
                  })
  
                )
                dispatch(setTokenId({
                  id:item.id
                }))
                dispatch(setMarket({
                  market_cap:item.market_cap,
                  total_supply:item.total_supply,
                  circulating_supply:item.circulating_supply,
                  high:item.high_24h,
                  low:item.low_24h,
                  price_change_percentage_24h_in_currency:item.price_change_percentage_24h_in_currency,
                  price_change_percentage_1h_in_currency:item.price_change_percentage_1h_in_currency,
                  price_change_percentage_7d_in_currency:item.price_change_percentage_7d_in_currency,
                  market_cap_rank:item.market_cap_rank,
  
                }))
              
            }
           
         
          return(
            <div key={index} className={styles.Assests} onClick={Select} >
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
        }
         
        )
      }
        </div>
  )
}

export default AllAssets