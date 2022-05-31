import React, { useCallback, useEffect, useState } from 'react'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnalytics, selectCountryName, selectTokenIndex, setCountryName, setCurrentPrice } from '../features/Analytics'
const PriceSelect = () => {
  const PriceData = useSelector(selectAnalytics)
  const countryID=useSelector(selectCountryName)
  const dispatch=useDispatch()
  const TokenIndex=useSelector(selectTokenIndex)

 const PriceId=Object.keys(PriceData[0]?.map((item:any) => item.market_data.current_price)[0]);
//  const currentPrice= PriceData[0]?.map((item:any) => item.market_data.current_price)[0][countryID]
const [open, setOpen] = useState(false)
 
  const onClick = useCallback(() => {
    setOpen(!open)
  }, [open])


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
              PriceId.map((item: any, index: number) => {
                const Select=()=>{
                  dispatch(setCountryName({
                    name:item
                  }))
                  dispatch(setCurrentPrice(
                    {
                      current_price:PriceData[0]?.map((item:any) => item.market_data.current_price)[TokenIndex][item]
                    }
                    )
                  )
                }

                 
                return (
                  <div key={index} onClick={Select}
                    >
                    <p className={styles.States_Country_Name}>{item.toUpperCase()}</p>
                  </div>
                )
              })
             
            }
               
          </div>
          : null
      }
    </div>
  )
}

export default PriceSelect