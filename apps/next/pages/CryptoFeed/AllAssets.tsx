import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAnalytics } from '../features/Analytics'
import styles from "../Css/CryptoFeed/AllAssets.module.css"
const AllAssets = () => {
const analyticsData=useSelector(selectAnalytics)

  return (
    <div>
      {
        analyticsData[0].map((item:any,index:number)=>{
          return(
            <div key={index} className={styles.Assests}>
              <Image
                 src={item.image.large}
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
        })
      }
    </div>
  )
}

export default AllAssets