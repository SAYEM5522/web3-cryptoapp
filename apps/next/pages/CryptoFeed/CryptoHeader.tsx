import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import styles from '../Css/CryptoFeed/CryptoHeader.module.css'
import {BiSearch} from "react-icons/bi"
import { useSelector } from 'react-redux'
import { selectAnalytics, selectCountryName, selectCurrentPrice, selectTokenName } from '../features/Analytics'
import SearchTerm from './SearchTerm'
const CryptoHeader = () => {
  const countryID=useSelector(selectCountryName)
  const Current_Price=useSelector(selectCurrentPrice)
  const analyticsData=useSelector(selectAnalytics)
  const TokenName="Bitcoin"
  const [search,setSearch]=useState('')
  const [open,setOpen]=useState(false)
  const onChange=useCallback((e)=>{
    setSearch(e.target.value)
  },[search])
  const onClick=useCallback(()=>{
    setOpen(!open)
  },[open])
  return (
    <div className={styles.CryptoHeader}>
      <div className={styles.CryptoHeader_Details}>
      <Image 
      src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
      width={45}
      height={45}
      objectFit="cover"
      />
      <div className={styles.CryptoHeader_Des}>
        <p className={styles.CryptoHeader_Title}>{TokenName} Price</p>
        <p className={styles.CryptoHeader_Title2}>
          {countryID.toUpperCase()} 
          <span className={styles.Price1}>{ Current_Price}</span>
          <sup className={styles.Price2}>.80</sup>  
          </p>
      </div>
      </div>
    
      <div style={{position:"relative"}} onClick={onClick}>
        <input type={'text'} className={styles.Input} placeholder="Search Tokens or Coins" onChange={onChange} />
        <BiSearch className={styles.Icon} size={32}/>
        {
          open?
          <SearchTerm analyticsData={analyticsData} search={search} />
          :null
        }
      </div>
    </div>
  )
}

export default CryptoHeader