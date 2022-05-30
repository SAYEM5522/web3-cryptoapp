import React, { useCallback, useState } from 'react'
import styles from '../Css/CryptoFeed/CryptoStats.module.css'
import {IoIosArrowDown} from 'react-icons/io'
const PriceSelect = () => {
  const [open,setOpen]=useState(false)
  const onClick=useCallback(()=>{
      setOpen(!open)
  },[open])
  const country="bdt"
  return (
    <div style={{position:"relative"}}>
    <div className={styles.CryptoFeed_Select} onClick={onClick} >
     <p className={styles.CryptoFeed_Select_Title}>BDT</p>
     <IoIosArrowDown size={25} color='white'className={styles.CryptoFeed_Select_Icon}/>
     </div>
     {
       open?
       <div className={styles.States_Country}>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>
            <p className={styles.States_Country_Name}>{country.toUpperCase()}</p>

       </div>
       :null
     }
     </div>
  )
}

export default PriceSelect