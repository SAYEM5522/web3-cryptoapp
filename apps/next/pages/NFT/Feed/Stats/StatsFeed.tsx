import React, { useCallback, useState } from 'react'
import NftHeader from '../../Header/NftHeader'
import StatsList from './StatsList'
import styles from "../../NftCss/Feed/Stats/StatsFeed.module.css"
const statsTime=[
  {
    id:1,
    day:1,
    type:"1 Day",
  },
  {
    id:2,
    day:7,
    type:"7 Days",

  },
  {
    id:3,
    day:30,
    type:"30 Days",
  },

]
const StatsFeed = () => {
  const [date,setDate]=useState(1)
  const [currentIndex,setCurrentIndex]=useState(0)
  const onClick=useCallback((date,index)=>{
    setDate(date)
    setCurrentIndex(index)
  },[])
  return (
    <div style={{flex:0.82}} className={styles.StatsFeed}>
      <NftHeader/>
      <div className={styles.StatsHeader} style={{"borderRadius":"10px"}}>
         {
            statsTime.map((item,index)=>{
              return(
                <div key={item.id} className={styles.StatsTime} style={{
                  "backgroundColor":(currentIndex===index)?"red":"#262C3A",
                  "borderRadius":(currentIndex===index)?"10px":"0px"
                  }}>
                  <div className={styles.StatsTimeText} onClick={()=>onClick(item.day,index)}>{item.type}</div>
                </div>
              )
            })
         }
          </div>
      <StatsList dateStats={date}/>
    </div>
  )
}

export default StatsFeed