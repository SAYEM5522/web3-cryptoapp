import React from 'react'
import GainerFeed from './GainerFeed'
import GainerHeader from './GainerHeader'
import styles from "../Css/GainerCss/Gainer/Gainer.module.css"
const Gainer = () => {
  return (
    <div className={styles.Gainer}>
      <GainerHeader/>
      <GainerFeed/>
    </div>
  )
}

export default Gainer