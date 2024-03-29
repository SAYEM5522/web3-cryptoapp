import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { selectNftSearch, setExploreList } from '../../../features/Nftfeatures';
import styles from "../../NftCss/Feed/Explore/ExploreList.module.css"
import ExploreDetails from './ExploreDetails';
interface IProps {
  title: string;
  data?: any;
}
const ExploreList = ({title,data}:IProps) => {
  const router=useRouter();
  const dispatch=useDispatch()
  const search=useSelector(selectNftSearch)
  const OnClick=useCallback(()=>{
       router.push(`/NFT/Feed/Explore/${title}?pid=${title}`)
       dispatch(setExploreList({
        ExploreList:data
       }))
  },[])
  const nftSliceList=data.slice(0,4)
  return (
    <div>
      <div className={styles.ExploreList_Caption} >
        <h1  >{title}</h1>
        <div className={styles.ExploreList_Caption_Right}>
        <p>Discover More</p>
         <BsArrowRight onClick={OnClick} size={21} color="black" className={styles.Explore_Caption_Icon}/>
        </div>
      
      </div>
      <div className={styles.ExploreList_Item_List}>
      {

        data.filter((value:any,index:number)=>{
         
          if(search==="")
          {
            return value
          }
          else if(value.title.toLowerCase().includes(search.toLowerCase())||
          value.type.toLowerCase().includes(search.toLowerCase()))
          {
            return value
          }

        }).map((item:any,index:number)=>{
          {
            if(title===item.type){
              return(
                <div className={styles.ExploreList_Item} key={index}>
                <ExploreDetails item={item}   />
              </div>
            )
            }
          }
        })



        // data.map((item:any,index:number)=>{
         
        //   {
        //     if(title===item.type){
        //       return(
        //         <div className={styles.ExploreList_Item} key={index}>
        //         <ExploreDetails item={item}   />
        //       </div>
        //     )
        //     }
        //   }
        //  })
      }
      </div>
    </div>
  )
}

export default ExploreList