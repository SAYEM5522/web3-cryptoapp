import React from 'react'
import NftHeader from '../../Header/NftHeader'
import StatsList from './StatsList'
import styles from "../../NftCss/Feed/Stats/StatsFeed.module.css"
const StatsFeed = () => {
  return (
    <div style={{flex:0.82}} className={styles.StatsFeed}>
      <NftHeader/>
      <StatsList/>
    </div>
  )
}

export default StatsFeed