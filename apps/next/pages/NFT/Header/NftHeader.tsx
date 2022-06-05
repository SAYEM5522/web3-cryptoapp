import { useRouter } from 'next/router';
import React, { memo, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selecttabindex, setTabIndex } from '../../features/Nftfeatures';
import styles from "../NftCss/Header/NftHeader.module.css"
const item=[
  {
    id:1,
    title:"EXPLORE",
    name:"Explore",
  },
  {
    id:2,
    title:"STATS",
    name:"Stats",
  },
  {
    id:3,
    title:"NFT",
    name:"Nft",
  },
  {
    id:4,
    title:"PROFILE",
    name:"Profile",
  }
]
const NftHeader = () => {
  const router=useRouter();
  const dispatch=useDispatch()
  const tabIndex=useSelector(selecttabindex)
  return (
    <div className={styles.NftHeader}>
      {
        item.map((item,index)=>{
          const DifferentRoute=useCallback((name,id)=>{
            dispatch(setTabIndex({
              tabIndex:index
            }))
              if(name==="Explore"){
                router.push({
                  pathname:`/NFT/Feed/${name}/${name}`
                })
              }
              else{
                router.push({
                  pathname:`/NFT/Feed/${name}/${name}`
                })
              }
          },[])
          return(
            <div className={styles.NftHeader_Item} key={item.id} onClick={()=>DifferentRoute(item.name,index)} >
              <p  style={{"backgroundColor":(tabIndex===index)?"blue":"#262C3A "}} >{item.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default memo(NftHeader)