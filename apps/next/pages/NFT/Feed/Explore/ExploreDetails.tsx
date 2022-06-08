import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import styles from "../../NftCss/Feed/Explore/ExploreList.module.css"
interface Props {
  item:{
    id:number,
    img:string;
    title:string;
  }
}
const ExploreDetails = ({item}:Props) => {
  const router=useRouter()
  const onClick=useCallback(()=>{
     router.push(`/NFT/Feed/NftDetails/${item.title}?pid=${item.id}`)
  },[])
  return (
    <div onClick={onClick}>
       <Image
              src={item.img}
              width={200}
              height={260}
              objectFit="cover"
              className='Nft_Image'
              />
              <div className={styles.ExploreList_Item_Info}>
                {
                  item.title
                }
              </div>
    </div>
  )
}

export default ExploreDetails