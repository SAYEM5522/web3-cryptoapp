import React from 'react'
import CryptoFeed from '../CryptoFeed/CryptoFeed'
import styles from "../Css/Home/Home.module.css"
import Sidebar from '../Sidebar/Sidebar'
import TokenBuy from '../TokenBuy/TokenBuy'
import TopToken from '../TopToken/TopToken'
const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home_container}>
      <Sidebar/>
      <CryptoFeed/>
      <div className={styles.Home_Right}>
        <TopToken/>
        <TokenBuy/>
      </div>

      </div>
    </div>
  )
}

export default Home