import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectExploreList } from '../../../features/Nftfeatures'
import Sidebar from '../../../Sidebar/Sidebar'
import ExploreDetails from './ExploreDetails'
import styles from "../../NftCss/Feed/Explore/id.module.css"
const ExploreId = () => {
  const router = useRouter()
  const { pid } = router.query
  const ExploreItem=useSelector(selectExploreList)
  console.log(ExploreItem)
  return (
    <div>
    <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
     <Sidebar/>
     <div style={{"flex":"0.82"}} className={styles.Id}>
      <h1> {pid}</h1>
      <div className={styles.Explore_Item_Details}>
      {
        ExploreItem[ExploreItem.length-1].map((item:any,index:any)=>{
          return(
            <div key={index} className={styles.Explore_Item_Lists}>
              <ExploreDetails item={item} />
              </div>
          )
        })
      }
      </div>
     </div>
</div>
</div>
  )
}

export default ExploreId