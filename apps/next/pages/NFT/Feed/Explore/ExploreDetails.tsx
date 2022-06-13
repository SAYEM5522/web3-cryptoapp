import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import styles from "../../NftCss/Feed/Explore/ExploreList.module.css"
interface Props {
  item:{
    id:number,
    img:string;
    title:string;
    profileName:string;
    ethLogo:string;
    bid:number;

  }
}
const ExploreDetails = ({item}:Props) => {
  const router=useRouter()
  const onClick=useCallback(()=>{
     router.push(`/NFT/Feed/NftDetails/${item.title}?pid=${item.id}`)
  },[])
  return (
    <div onClick={onClick} className={styles.Explore_Details} >
       <Image
              src={item.img}
              width={200}
              height={260}
              objectFit="cover"
              className='Nft_Image'
              />
              <p className={styles.Explore_Details_Name}>{item.profileName}</p>
              <div className={styles.ExploreList_Item_Info}>
                {
                  item.title
                }
              </div>
              <div className={styles.Explore_Details_Bid}>
                <div className={styles.Explore_Details_Bid_Img}>
                <Image
                 src={item.ethLogo}
                  width={20}
                  height={20}
                  objectFit="cover"
                  className='Nft_Image_Logo'
                />
                </div>
                <div className={styles.Explore_Details_Bid_Des}>
                 <p className={styles.Explore_Details_Bid1} >Current Bid</p>
                 <p className={styles.Explore_Details_Bid2}>{item.bid} ETH</p>
                 </div>
              </div>
              <div className={styles.Explore_Details_Time}>
                <div className={styles.Explore_Details_Time_Img}>
                <Image
                 src={item.ethLogo}
                  width={20}
                  height={20}
                  objectFit="cover"
                  className='Nft_Image_Logo'
                />
                </div>
                <div className={styles.Explore_Details_Time_Des}>
                 <p className={styles.Explore_Details_time1} >Ends in</p>
                 <p className={styles.Explore_Details_time2}>{item.bid} ETH</p>
                 </div>
              </div>
    </div>
  )
}

export default ExploreDetails