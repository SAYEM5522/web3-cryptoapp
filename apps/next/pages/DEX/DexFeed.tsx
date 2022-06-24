import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../Css/PoolCss/DexFeed.module.css"
import { selectDexList } from '../features/DexFeatures'
const DexFeed = () => {
  const DexList=useSelector(selectDexList)
  const router=useRouter()
  
  return (
    <div className={styles.DexFeed}>
      <div className={styles.DexFeed_Header}>
        <p># Rank</p>
       <p>Exchange</p>
       <p>Trade Volume (24H BTC)</p>
       <p>Trust Score</p>

      </div>
      {
        DexList[0]?.map((item:any,index:number)=>{
          const GoToDetails=()=>{
            router.push("/DEX/DexDetaild")
          }
          return(
            <div className={styles.DexFeed_List} onClick={GoToDetails} >
              <p className={styles.DexFeed_List_Rank}>{item.trust_score_rank}</p>
              <div className={styles.DexFeed_List_DES}>
              <Image
               src={item?.image}
                width={35}
                height={35}
                alt={item.name}
                objectFit="cover"
                className='trending_img'
                layout='fixed'
              
               />
              <p className={styles.DexFeed_List_Id}>{item.name}</p>
              </div>
              <p className={styles.DexFeed_List_Volume}>{item.trade_volume_24h_btc.toFixed(3)}</p>
              <p className={styles.DexFeed_List_Score}>{item.trust_score}</p>

            </div>
          )
        })
      }
    </div>
  )
}

export default DexFeed