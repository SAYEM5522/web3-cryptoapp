import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../Css/CryptoFeed/SearchTerm.module.css'
import { selectTokenIndex, setCountryName, setTokenIndex, setTokenName } from '../features/Analytics'
interface Props 
{
  analyticsData?:any,
  search:string
}
const SearchTerm = ({analyticsData,search}:Props) => {
  const dispatch=useDispatch();
  // const TokenIndex=useSelector(selectTokenIndex)
  // console.log(TokenIndex)
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
          const Select=()=>{
            analyticsData[0]?.map((list:any,index:number)=>{
              list.name===item.name?dispatch(setTokenIndex(index)):null,
              dispatch(setTokenName({
                TokenName:item.name,
                Tokenimg:item.image.large
              }))
            })
           
          }
          return(
            <div key={index} className={styles.SearchTerm_Item} onClick={Select} >
              <Image
                 src={item.image.large}
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
                 </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default SearchTerm