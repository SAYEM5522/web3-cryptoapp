import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import { selectAnalytics, selectCirculatingSupply, selectHigh, selectLow, selectMarketCap, selectMarketCapRank, selectPriceChangePercentage1hInCurrency, selectPriceChangePercentage24hInCurrency, selectPriceChangePercentage7dInCurrency, selectTotalSupply, setAnalytics } from '../features/Analytics'
import PriceSelect from './PriceSelect'
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import useColor from './useColor'

const CryptoStats = () => {
 
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(true)
  const price_1h=useSelector(selectPriceChangePercentage1hInCurrency)
  const price_24h=useSelector(selectPriceChangePercentage24hInCurrency)
  const price_7d=useSelector(selectPriceChangePercentage7dInCurrency)
const analyticsData=useSelector(selectAnalytics)
  return (
    <>
  
      <>
      <div className={styles.CryptoFeed_Stats}>
        <p className={styles.CryptoStats_Caption} >Market stats</p>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            MARKET CAP
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>{useSelector(selectMarketCap)}</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            TOTAL SUPPLY
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>{useSelector(selectTotalSupply)}</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            CIRCULATING SUPPLY
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>{useSelector(selectCirculatingSupply)}</p>
          </div>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginLeft:"-25px"}}>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            MARKET_CAP_RANK
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>#{useSelector(selectMarketCapRank)}</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            HIGH(24H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>{useSelector(selectHigh)}</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            LOW(24H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>{useSelector(selectLow)}</p>
          </div>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginLeft:"25px"}}>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            PRICE CHANGE(1H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price} style={{color:useColor(price_1h).color?"#00ff00":"#ff0000"}}>{price_1h}</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            PRICE CHANGE(24H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price} style={{color:useColor(price_24h).color?"#00ff00":"#ff0000"}}>{price_24h}</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            PRICE CHANGE(7D)
            </h3>
            <p className={styles.CryptoStats_Caption_Price} style={{color:useColor(price_7d).color?"#00ff00":"#ff0000"}}>{price_7d}</p>
          </div>
          </div>
      </div>
      </>
   
   
    </>
  )
}

export default CryptoStats