import axios from 'axios'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import styles from "../Css/GainerCss/Gainer/GainerFeed.module.css"
const GItem=[
  {
    id:1,
    name:"All Assets",

  },
  {
    id:2,
    name:"Gainers",

  },
  {
    id:3,
    name:"Losers",

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
  const [selectTime,setSelectTime]=React.useState({
    type:"1H",
    limit:"price_change_percentage_1h_in_currency"
  })
 const [data,setData]=useState([])
  const getData=async()=>{
  await  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${'eth'}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`).then(res=>{
     setData(res.data)
    }).catch
    (err=>console.log(err))
}
useEffect(()=>{
  getData(),
  ()=>getData()
},[])
console.log(data)
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
                  <p>{item.name}</p>
                  </div>
              )
            })
         }
      </div>
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
   

      </div>
      <div>
        {
          
          data.map((value:any,index)=>{
 
             if(selectData==="All Assets"){
            return(
              <div className={styles.GainerFeed_List} key={index}>
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
                 
                   {
                     (selectTime.type==="1H")?<p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1h_in_currency?.toFixed(3)}</p>
                     :(selectTime.type==="24H")?<p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_24h_in_currency?.toFixed(3)}</p>
                      :(selectTime.type==="7D")?
                        <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_7d_in_currency?.toFixed(3)}</p>
                      :(selectTime.type==="1M")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_30d_in_currency?.toFixed(3)}</p>
                         
                      
                      :(selectTime.type==="1Y")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1y_in_currency?.toFixed(3)}</p>
                     :null  
                  
                   }
                  </div>
                </div>
            )
          }
          else if(selectData==="Gainers"){
            if(value[selectTime.limit]>0){
              return(
                <div className={styles.GainerFeed_List} key={index}>
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
                    {
                     (selectTime.type==="1H")?<p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1h_in_currency?.toFixed(3)}</p>
                     :(selectTime.type==="24H")?<p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_24h_in_currency?.toFixed(3)}</p>
                      :(selectTime.type==="7D")?
                        <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_7d_in_currency?.toFixed(3)}</p>
                      :(selectTime.type==="1M")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_30d_in_currency?.toFixed(3)}</p>
                         
                      
                      :(selectTime.type==="1Y")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1y_in_currency?.toFixed(3)}</p>
                     :null  
                  
                   }
                    </div>
                  </div>
              )
            }
          }
          else if(selectData==="Losers"){
            if(value[selectTime.limit]<0){
              return(
                <div className={styles.GainerFeed_List} key={index}>
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
                    {
                     (selectTime.type==="1H")?<p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1h_in_currency?.toFixed(3)}</p>
                     :(selectTime.type==="24H")?<p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_24h_in_currency?.toFixed(3)}</p>
                      :(selectTime.type==="7D")?
                        <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_7d_in_currency?.toFixed(3)}</p>
                      :(selectTime.type==="1M")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_30d_in_currency?.toFixed(3)}</p>
                         
                      
                      :(selectTime.type==="1Y")?
                          <p className={styles.GainerFeed_List_Item_Price_Change} >{value.price_change_percentage_1y_in_currency?.toFixed(3)}</p>
                     :null  
                  
                   }
                    </div>
                  </div>
              )
            }
          }
        
        })
        }
      </div>
    </div>
  )
}

export default GainerFeed