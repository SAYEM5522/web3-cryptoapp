import Image from 'next/image'
import React from 'react'
import styles from "../../NftCss/Feed/Explore/ExploreList.module.css"
interface Props {
  item:{
    id:number,
    img:string;
    title:string;
  }
}
const ExploreDetails = ({item}:Props) => {
  return (
    <div>
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