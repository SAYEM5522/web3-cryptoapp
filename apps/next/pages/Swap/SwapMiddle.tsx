import React, { useCallback, useState } from 'react'
import styles from "../Css/SwapCss/SwapMiddle.module.css"
import {FiSettings} from "react-icons/fi"
import { WalletConnect } from '../WalletConnect/WalletConnect'
import SwapList from "./SwapList"
const SwapMiddle = () => {
  const [Amount1,setAmount1]=useState(0)
  const [Amount2,setAmount2]=useState(0)
  const [open1,setOpen1]=useState(false)

  const SwapAmount1=useCallback((e)=>{
    setAmount1(e.target.value)
  },[])
  const SwapAmount2=useCallback((e)=>{
    setAmount2(e.target.value)
  },[])
   const TokenView1=useCallback(()=>{
    setOpen1(!open1)
   },[open1])


  return (
    <div style={{flex:"0.78"}}>
      <div>
      <div className={styles.SwapMiddleFeed} >
        <div className={styles.SwapMiddleFeed_Header}>
         <p>Swap</p>
         <FiSettings size={27} color="#fff"/>
        </div>
        <div className={styles.SwapMiddleFeed_Body}>
          <div style={{position:"relative"}}>
         <input type="number" className={styles.Input1}  placeholder="0.0" onChange={SwapAmount1} />
         <div className={styles.SelectToke1} onClick={TokenView1}>
          <p>Select A Token</p>
        </div>
        </div>
        <div style={{position:"relative"}} >
        <input type="number" className={styles.Input2}  placeholder="0.0" onChange={SwapAmount2}/>
        <div className={styles.SelectToke2} onClick={TokenView1}>
          <p>Select A Token</p>
        </div>
        </div>
        </div>

        <div className={styles.SwapMiddleFeed_Bottom}>
          <WalletConnect/>
        </div>
        {
        open1?
        <div className={styles.TokenList}>
          <div className={styles.TokenListHeader}>
           <p>Select Token</p>
            <p onClick={()=>{setOpen1(false)}}>X</p>
            
          </div>
          <div className={styles.SwapList} >
               <SwapList/>
           </div>
        </div>
        :null
      }
      </div>
      </div>
    
    </div>
  )
}

export default SwapMiddle