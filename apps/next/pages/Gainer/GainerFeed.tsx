import React, { useCallback } from 'react'
import styles from "../Css/GainerCss/Gainer/GainerFeed.module.css"
const GItem=[
  {
    id:1,
    name:"All Assets",

  },
  {
    id:2,
    name:"Gainers",

  },
  {
    id:3,
    name:"Losers",

  },
]
const dataSelect=[
  {
    id:1,
    type:'1H',
    value:0.4
  },
  {
    id:2,
    type:'24H',
    value:1
  },
  {
    id:3,
    type:'7D',
    value:7
  },
  {
    id:4,
    type:'1M',
    value:30
  },
  {
    id:5,
    type:'1Y',
    value:365
  }
]
const GainerFeed = () => {
  const [currentIndex,setCurrentIndex]=React.useState(0)
  const [currentIndex2,setCurrentIndex2]=React.useState(0)

  return (
    <div className={styles.GainerFeed}>
      <div className={styles.GainerHeader}>
      <div className={styles.GainerFeed_Top}>
         {
            GItem.map((item,index)=>{
              const onClick=useCallback(()=>{
                setCurrentIndex(index)
              },[])
              return(
                <div className={styles.GainerFeed_Top_Des} style={{"backgroundColor":(currentIndex===index)?"#83a37e":"#1C1E2A"}} key={index} onClick={onClick}>
                  <p>{item.name}</p>
                  </div>
              )
            })
         }
      </div>
      <div className={styles.CryptoGraph_Header}>
      {
        dataSelect.map((value,index)=>{
          const Select=()=>{
            setCurrentIndex2(index)
          }
          return(
            <div onClick={Select} className={styles.CryptoGraph_List} key={index}>
              <p style={{"color":(currentIndex2===index)?"#83a37e":"white"}}>{value.type}</p>
            </div>
          )
        })
      }
      </div>
      </div>

    </div>
  )
}

export default GainerFeed