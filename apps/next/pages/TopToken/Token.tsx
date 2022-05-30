import React, { useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from "../Css/TopToken/Token.module.css"
const Token = () => {
  const [token, setToken] = React.useState([])
  const getdata= async()=>{
   await axios.get('https://api.coingecko.com/api/v3/search/trending')
    .then(res => {
      setToken(res.data.coins)
    })
    .catch(err => {
      console.log(err)
    })
  }

 useEffect(()=>{
    getdata()
 },[])
 const t=token.slice(0,5)
  return (
    <div style={{marginTop:"10px",marginLeft:"0px"}}>
      <p className={styles.Token_Caption}>Trending Coins</p>
      {
        
        t
        .map((item:any,index)=>{
          return(
            <div key={index} className={styles.Token} >
                 <Image
                 src={item.item.large}
                  width={35}
                  height={35}
                  alt={item.item.name}
                  objectFit="cover"
                  className='trending_img'
                  layout='fixed'
                
                 />
                 <div className={styles.Token_Detail}>
                   <p className={styles.Token_Detail_Title}>
                      {item.item.name}
                   </p>
                    <p className={styles.Token_Detail_Title2}>
                    market_cap_rank:
                      {
                        item.item.market_cap_rank
                      }
                    </p> 
                  </div>
            </div>
          )
        })
      }
    </div>
  )
}



export default Token