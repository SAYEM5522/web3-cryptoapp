import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import { selectAnalytics, setAnalytics } from '../features/Analytics'
import PriceSelect from './PriceSelect'
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import useColor from './useColor'

const CryptoStats = () => {
  const {color}=useColor(100);
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(true)

const getData=async()=>{
    await axios.get('https://api.coingecko.com/api/v3/coins')
    .then(res=>{
      dispatch(setAnalytics(res.data))
      setLoading(false)
    })
    .catch(err=>console.log(err))
   
}
useEffect(()=>{
    getData(),
    ()=>getData()
},[])
const override = css`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  top:40%
`;
const analyticsData=useSelector(selectAnalytics)
  return (
    <>
    {
      loading?
      <div style={{height:"350px",width:"97%"}}>
      <HashLoader color={"red"} css={override} loading={loading} size={105}  />
      </div>
      :
      <>
      <PriceSelect/>
      <div className={styles.CryptoFeed_Stats}>
        <p className={styles.CryptoStats_Caption} >Market stats</p>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            MARKET CAP
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>BDT 51.9T</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            VOLUME (24H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>BDT 51.9T</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            CIRCULATING SUPPLY
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>BDT 51.9T</p>
          </div>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginLeft:"-25px"}}>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            MARKET_CAP_RANK
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>#1</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            HIGH(24H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>BDT 51.9T</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            LOW(24H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price}>BDT 51.9T</p>
          </div>
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginLeft:"25px"}}>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            PRICE CHANGE(1H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price} style={{color:color}}>+4.84%</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            PRICE CHANGE(24H)
            </h3>
            <p className={styles.CryptoStats_Caption_Price} style={{color:color}}>+0.66%</p>
          </div>
          <div>
            <h3 className={styles.CryptoStats_Caption_Text}>
            PRICE CHANGE(7D)
            </h3>
            <p className={styles.CryptoStats_Caption_Price} style={{color:color}}>+0.45%</p>
          </div>
          </div>
      </div>
      </>
    }
   
    </>
  )
}

export default CryptoStats