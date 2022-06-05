import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import styles from "../../NftCss/Feed/Explore/ExploreList.module.css"
interface IProps {
  title: string;
}
const ExploreList = ({title}:IProps) => {
  return (
    <div>
      <div className={styles.ExploreList_Caption} >
        <h1  >{title}</h1>
        <div className={styles.ExploreList_Caption_Right}>
        <p>Discover More</p>
         <BsArrowRight size={21} color="black" className={styles.Explore_Caption_Icon}/>
        </div>
      
      </div>
    </div>
  )
}

export default ExploreList