import Image from 'next/image'
import React from 'react'
import styles from '../Css/CryptoFeed/SearchTerm.module.css'
interface Props 
{
  analyticsData?:any,
  search:string
}
const SearchTerm = ({analyticsData,search}:Props) => {
  return (
    <div className={styles.SearchTerm}>
       {
        analyticsData[0]?.filter((value:any)=>{
          if(search==="")
          {
            return value
          }
          else if(value.name.toLowerCase().includes(search.toLowerCase()))
          {
            return value
          }

        }).map((item:any,index:number)=>{
          return(
            <div key={index} className={styles.SearchTerm_Item}>
              <Image
                 src={item.image.large}
                  width={35}
                  height={35}
                  alt={item.name}
                  objectFit="cover"
                  className='trending_img'
                  layout='fixed'
                
                 />
                 <div className={styles.SearchTerm_Des}>
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

export default SearchTerm