import Image from 'next/image'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../Css/CryptoFeed/SearchTerm.module.css'
import { selectAnalytics2, selectCountryName, selectTokenIndex, setCountryName, setCurrentPrice, setTokenId, setTokenIndex, setTokenName } from '../features/Analytics'
interface Props 
{
  analyticsData?:any,
  search:string
}
const SearchTerm = ({search}:Props) => {
  const dispatch=useDispatch();
  const countrycode=useSelector(selectCountryName)
  const analyticData2=useSelector(selectAnalytics2)
   const analyticsData= analyticData2[analyticData2.length-1]
  // console.log(TokenIndex)
  return (
    <div className={styles.SearchTerm}>
       {
        analyticsData?.filter((value:any)=>{
          if(search==="")
          {
            return value
          }
          else if(value.name.toLowerCase().includes(search.toLowerCase()))
          {
            return value
          }
         

        }).map((item:any,index:number)=>{
          const Select=()=>{
            analyticsData?.map((list:any,index:number)=>{
              list.name===item.name?dispatch(setTokenIndex(index)):null,
              dispatch(setTokenName({
                TokenName:item.name,
                Tokenimg:item.image
              })),
              // dispatch(
              //   setCurrentPrice({
              //     current_price:item.current_price
              //   })

              // )
              dispatch(setTokenId({
                id:item.id
              }))
            })
           
          }
          return(
            <div key={index} className={styles.SearchTerm_Item} onClick={Select} >
              <Image
                 src={item.image}
                  width={35}
                  height={35}
                  alt={item.name}
                  objectFit="cover"
                  className='trending_img'
                  layout='fixed'
                
                 />
                 <div className={styles.SearchTerm_Des} >
                 <p >{item.name}</p>
                 <p style={{marginTop:"-10px"}}>{item.symbol.toUpperCase()}</p>
                 <p style={{marginTop:"-10px"}}>{item.current_price}</p>
                 </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default SearchTerm