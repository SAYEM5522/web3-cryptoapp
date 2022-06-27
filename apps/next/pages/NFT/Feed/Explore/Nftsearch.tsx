import React, { useCallback } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setNftSearch } from '../../../features/Nftfeatures'
import styles from "../../NftCss/Feed/Explore/Nftsearch.module.css"
const Nftsearch = () => {
  const dispatch = useDispatch()
  const textInput=useCallback((e)=>{
    dispatch(setNftSearch({
      NftSearch:e.target.value
    }))
  },[])
  return (
    <div style={{position:"relative"}} >
    <input type={'text'} className={styles.Input} placeholder="Search Tokens or Coins" onChange={textInput} />
    <BiSearch className={styles.Icon} size={32}/>
    </div>
  )
}

export default Nftsearch