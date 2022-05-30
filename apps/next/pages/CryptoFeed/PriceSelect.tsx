import React, { useCallback, useEffect, useState } from 'react'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnalytics, selectCountryName, setCountryName } from '../features/Analytics'
const priceCountry = [
  {
    id: 1,
    name: 'aed'
  },
  {
    id: 2,
    name: 'ars'
  },
  {
    id: 3,
    name: 'aud'
  },
  {
    id: 4,
    name: 'bch'
  },
  {
    id: 5,
    name: 'bdt'
  },
  {
    id: 6,
    name: 'bhd'
  },
  {
    id: 7,
    name: 'bmd'
  },
  {
    id: 8,
    name: 'bnb'
  },
  {
    id: 9,
    name: 'brl'
  }, {
    id: 10,
    name: 'btc'
  }, {
    id: 11,
    name: 'cad'
  }, {
    id: 12,
    name: 'chf'
  }, {
    id: 13,
    name: 'clp'
  }, {
    id: 14,
    name: 'cny'
  }, {
    id: 15,
    name: 'czk'
  }, {
    id: 16,
    name: 'dkk'
  }, {
    id: 17,
    name: 'dot'
  }, {
    id: 18,
    name: 'eos'
  }, {
    id: 19,
    name: 'eth'
  },

]
const PriceSelect = () => {
  const PriceData = useSelector(selectAnalytics)
  const countryID=useSelector(selectCountryName)
  const dispatch=useDispatch()
//  const p= PriceData[0]?.map((item:any) => item.market_data.current_price)
 const currentPrice= PriceData[0]?.map((item:any) => item.market_data.current_price)[0][countryID]
 const PriceId=Object.keys(PriceData[0]?.map((item:any) => item.market_data.current_price)[0]);
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

                return (
                  <div key={index}>
                    <p onClick={()=>dispatch(
                      setCountryName(
                       {
                         name:item,
                         current_price:currentPrice
                       }
                      ),
                     
                    )} className={styles.States_Country_Name}>{item.toUpperCase()}</p>
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