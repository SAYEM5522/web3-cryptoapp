import axios from 'axios'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import styles from "../Css/GainerCss/Gainer/GainerFeed.module.css"
import {AiOutlineGlobal} from 'react-icons/ai'
import {BsArrowDownRight} from 'react-icons/bs'
import {GiStarShuriken} from 'react-icons/gi'
import PriceSelect from '../CryptoFeed/PriceSelect'
import { useDispatch, useSelector } from 'react-redux'
import { selectCountryName, selectGainerPageNumber, setCurrentPrice, setGainerIndex, setMarket, setTokenId, setTokenIndex, setTokenName } from '../features/Analytics'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination'
const GItem=[
  {
    id:1,
    name:"All Assets",
    type:AiOutlineGlobal

  },
  {
    id:2,
    name:"Gainers",
    type:GiStarShuriken

  },
  {
    id:3,
    name:"Losers",
    type:BsArrowDownRight

  },
]
const dataSelect=[
  {
    id:1,
    type:'1H',
    value:0.4,
    limit:'price_change_percentage_1h_in_currency'
  },
  {
    id:2,
    type:'24H',
    value:1,
    limit:'price_change_percentage_24h_in_currency'

  },
  {
    id:3,
    type:'7D',
    value:7,
    limit:'price_change_percentage_7d_in_currency'

  },
  {
    id:4,
    type:'1M',
    value:30,
    limit:'price_change_percentage_30d_in_currency'

  },
  {
    id:5,
    type:'1Y',
    value:365,
    limit:'price_change_percentage_1y_in_currency'

  }
]
const GainerFeed = () => {
  const [currentIndex,setCurrentIndex]=React.useState(0)
  const [currentIndex2,setCurrentIndex2]=React.useState(0)
  const [selectData,setSelectData]=React.useState("All Assets")
  const TokenCountry=useSelector(selectCountryName)
  const pageNumber=useSelector(selectGainerPageNumber)
  const router=useRouter()
  const dispatch=useDispatch()
  const [selectTime,setSelectTime]=React.useState({
    type:"1H",
    limit:"price_change_percentage_1h_in_currency"
  })
 const [data,setData]=useState([])
  const getData=async()=>{
  await  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${TokenCountry}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`).then(res=>{
     setData(res.data)
    }).catch
    (err=>console.log(err))
}
useEffect(()=>{
  getData(),
  ()=>getData()
},[TokenCountry,pageNumber])



  return (

    <div className={styles.GainerFeed}>
      <div className={styles.GainerHeader}>
      <div className={styles.GainerFeed_Top}>
         {
            GItem.map((item,index)=>{
              const onClick=useCallback(()=>{
                setCurrentIndex(index)
                setSelectData(item.name)
                
              },[])
              return(
                <div className={styles.GainerFeed_Top_Des} style={{"backgroundColor":(currentIndex===index)?"#83a37e":"#1C1E2A"}} key={index} onClick={onClick}>
                  <item.type className={styles.GainerFeed_Top_Des_Icon} size={30}/>
                  <p>{item.name}</p>
                  </div>
              )
            })
         }
      </div>
      <div className={styles.CryptoGraph_Header_Right} >
      <div className={styles.CryptoGraph_Header}>
      {
        dataSelect.map((value,index)=>{
          const Select=()=>{
            setCurrentIndex2(index)
            setSelectTime({
              type:value.type,
              limit:value.limit
            })
          }
          return(
            <div onClick={Select} className={styles.CryptoGraph_List} key={index}>
              <p style={{"color":(currentIndex2===index)?"#83a37e":"white"}}>{value.type}</p>
            </div>
          )
        })
      }
      </div>
      <div style={{"marginTop":"22px","marginLeft":"15px"}}><PriceSelect/></div>
      
      </div>
      </div>
      <div className={styles.stats_Caption}>
    <p className={styles.stats_caption_1}>Name</p>
    <p className={styles.stats_caption_2}>Symbol</p>
    <p className={styles.stats_caption_3}>Price Change</p>
    <p className={styles.stats_caption_4}>Market Capital</p>
    <p className={styles.stats_caption_5}>Supply</p>
    </div>
      <div className={styles.GainerFeed_Details}>
        {
          
          data.map((value:any,index)=>{
            const onClickGo=()=>{

              dispatch(setTokenIndex(index)),

              dispatch(setTokenName({
                TokenName:value.name,
                Tokenimg:value.image
              })),
              dispatch(
                setCurrentPrice({
                  current_price:value.current_price
                })

              )
              dispatch(setTokenId({
                id:value.id
              }))
              dispatch(setMarket({
                market_cap:value.market_cap,
                total_supply:value.total_supply,
                circulating_supply:value.circulating_supply,
                high:value.high_24h,
                low:value.low_24h,
                price_change_percentage_24h_in_currency:value.price_change_percentage_24h_in_currency,
                price_change_percentage_1h_in_currency:value.price_change_percentage_1h_in_currency,
                price_change_percentage_7d_in_currency:value.price_change_percentage_7d_in_currency,
                market_cap_rank:value.market_cap_rank,

              }))




              router.push("/Analytics/Analytics")
         }
             if(selectData==="All Assets"){
            return(
              <div className={styles.GainerFeed_List} key={index} onClick={onClickGo}>
                <div className={styles.GainerFeed_List_Left}>
                 <div className={styles.GainerFeed_List_Item}>
                 <Image
                 src={value.image}
                 width={50}
                  height={50}
                  alt="nft"
                  objectFit='cover'
                  className='nft-feed_avatar'
                  />
                  <p className={styles.GainerFeed_List_Item_Name} >{value.name}</p>
                  </div>
                  <p className={styles.GainerFeed_List_Item_Symbol}>{value.symbol.toUpperCase()}</p>
                   {
                     (selectTime.type==="1H")?<p style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} className={styles.GainerFeed_List_Item_Price_Change}>{value.price_change_percentage_1h_in_currency?.toFixed(3)}%</p>
                     :(selectTime.type==="24H")?<p style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_24h_in_currency?.toFixed(3)}%</p>
                      :(selectTime.type==="7D")?
                        <p style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_7d_in_currency?.toFixed(3)}%</p>
                      :(selectTime.type==="1M")?
                          <p style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_30d_in_currency?.toFixed(3)}%</p>
                         
                      
                      :(selectTime.type==="1Y")?
                          <p style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1y_in_currency?.toFixed(3)}%</p>
                     :null  
                  
                   }
                    <p className={styles.GainerFeed_List_Item_Market}>{value.market_cap}</p>
                    <p className={styles.GainerFeed_List_Item_Supply}>{value.total_supply}</p>
                  </div>
                </div>
            )
          }
          else if(selectData==="Gainers"){
            if(value[selectTime.limit]>0){
              return(
                <div className={styles.GainerFeed_List} key={index} onClick={onClickGo}>
                  <div className={styles.GainerFeed_List_Left}>
                   <div className={styles.GainerFeed_List_Item}>
                   <Image
                   src={value.image}
                   width={50}
                    height={50}
                    alt="nft"
                    objectFit='cover'
                    className='nft-feed_avatar'
                    />
                    <p className={styles.GainerFeed_List_Item_Name} >{value.name}</p>
                    </div>
                    <p className={styles.GainerFeed_List_Item_Symbol}>{value.symbol.toUpperCase()}</p>
                    {
                     (selectTime.type==="1H")?<p className={styles.GainerFeed_List_Item_Price_Change} style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} >{value.price_change_percentage_1h_in_currency?.toFixed(3)}%</p>
                     :(selectTime.type==="24H")?<p className={styles.GainerFeed_List_Item_Price_Change} style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} >{value.price_change_percentage_24h_in_currency?.toFixed(3)}%</p>
                      :(selectTime.type==="7D")?
                        <p className={styles.GainerFeed_List_Item_Price_Change} style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} >{value.price_change_percentage_7d_in_currency?.toFixed(3)}%</p>
                      :(selectTime.type==="1M")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} >{value.price_change_percentage_30d_in_currency?.toFixed(3)}%</p>
                         
                      
                      :(selectTime.type==="1Y")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} style={{"color":value[selectTime.limit]>0?"#00ff00":"#ff0000"}} >{value.price_change_percentage_1y_in_currency?.toFixed(3)}%</p>
                     :null  
                  
                   }
                    <p className={styles.GainerFeed_List_Item_Symbol}>{value.market_cap}</p>
                    <p className={styles.GainerFeed_List_Item_Symbol}>{value.total_supply}</p>
                    </div>
                  </div>
              )
            }
          }
          else if(selectData==="Losers"){
            if(value[selectTime.limit]<0){
              return(
                <div className={styles.GainerFeed_List} key={index} onClick={onClickGo}>
                  <div className={styles.GainerFeed_List_Left}>
                   <div className={styles.GainerFeed_List_Item}>
                   <Image
                   src={value.image}
                   width={50}
                    height={50}
                    alt="nft"
                    objectFit='cover'
                    className='nft-feed_avatar'
                    />
                    <p className={styles.GainerFeed_List_Item_Name} >{value.name}</p>
                    </div>
                    <p className={styles.GainerFeed_List_Item_Symbol}>{value.symbol.toUpperCase()}</p>
                    {
                     (selectTime.type==="1H")?<p style={{"color":value[selectTime.limit]<0?"#ff0000":"#00ff00"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1h_in_currency?.toFixed(3)}%</p>
                     :(selectTime.type==="24H")?<p style={{"color":value[selectTime.limit]<0?"#ff0000":"#00ff00"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_24h_in_currency?.toFixed(3)}%</p>
                      :(selectTime.type==="7D")?
                        <p style={{"color":value[selectTime.limit]<0?"#ff0000":"#00ff00"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_7d_in_currency?.toFixed(3)}%</p>
                      :(selectTime.type==="1M")?
                          <p style={{"color":value[selectTime.limit]<0?"#ff0000":"#00ff00"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_30d_in_currency?.toFixed(3)}%</p>
                         
                      
                      :(selectTime.type==="1Y")?
                          <p style={{"color":value[selectTime.limit]<0?"#ff0000":"#00ff00"}} className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1y_in_currency?.toFixed(3)}%</p>
                     :null  
                  
                   }
                    <p className={styles.GainerFeed_List_Item_Symbol}>{value.market_cap}</p>
                    <p className={styles.GainerFeed_List_Item_Symbol}>{value.total_supply}</p>
                    </div>
                  </div>
              )
            }
          }
        
        })
        }
      </div>
      <div>
    <Pagination/>
      </div>
    </div>
  )
}

export default GainerFeed