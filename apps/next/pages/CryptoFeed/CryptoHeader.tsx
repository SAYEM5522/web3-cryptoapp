import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import styles from '../Css/CryptoFeed/CryptoHeader.module.css'
import {BiSearch} from "react-icons/bi"
import { useSelector } from 'react-redux'
import { selectAnalytics, selectAnalytics2, selectCountryName, selectCurrentPrice, selectGainerCall, selectTokenImg, selectTokenIndex, selectTokenName } from '../features/Analytics'
import SearchTerm from './SearchTerm'
import PriceSelect from './PriceSelect'
interface Props {
  data : any
}
const CryptoHeader = ({data}:Props) => {
  const countryID=useSelector(selectCountryName)
  const TokenName=useSelector(selectTokenName)
  const TokenImg=useSelector(selectTokenImg)
  const [search,setSearch]=useState('')
  const [open,setOpen]=useState(false)
  const TokenIndex=useSelector(selectTokenIndex)
  const onChange=useCallback((e)=>{
    setSearch(e.target.value)
  },[search])
  const onClick=useCallback(()=>{
    setOpen(!open)
  },[open])
  useEffect(()=>{},[TokenIndex])
  return (
    <>
    <div className={styles.CryptoHeader}>
      <div className={styles.CryptoHeader_Details}>
      <Image 
      src={TokenImg}
      width={45}
      height={45}
      objectFit="cover"
      />
      <div className={styles.CryptoHeader_Des}>
        <p className={styles.CryptoHeader_Title}>{TokenName} Price</p>
        <p className={styles.CryptoHeader_Title2}>
          {countryID.toUpperCase()} 
          <span className={styles.Price1}>{data?.map((list:any,index:number)=>(list.current_price))[TokenIndex]}</span>
          <sup className={styles.Price2}>.80</sup>  
          </p>
      </div>
      </div>
    
      <div style={{position:"relative"}} >
        <input type={'text'} className={styles.Input}  onClick={onClick} placeholder="Search Tokens or Coins" onChange={onChange} />
        <BiSearch className={styles.Icon} size={32}/>
        {
          open ?
          <SearchTerm  search={search} />
          :null
        }
      </div>
    </div>
    <PriceSelect data={data} />
    </>
  )
}

export default CryptoHeader