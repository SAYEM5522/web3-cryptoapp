import Image from 'next/image'
import React, { useCallback } from 'react'
import styles from "../../NftCss/Feed/Nft/NftCollection.module.css"
import {BiDotsVerticalRounded} from 'react-icons/bi'
import { useRouter } from 'next/router'
import {AiOutlineHeart} from 'react-icons/ai'
interface Props{
  item:any
}
const NftCollection = ({item}:Props) => {
  const router=useRouter()
  const GoToProfile=useCallback(()=>{
    router.push(`/NFT/Feed/UserNftProfile/${item.ProfileId}`)
  },[])
  return (
      <div className={styles.NftCollectionFeed}>
          <div className={styles.NftCollectionFeed_Top}>
            <div style={{"marginLeft":"12px"}}>
            <Image
                 src={"https://lh3.googleusercontent.com/20749ie-OQXjwxzOuvTyeUD8y8zc34PHhLyZUxWBY5UQKh15jGw8JwtpAtrppXhDmuRgPHabG9KxnpFV7UnMEFmtLC0pttrWGxNAFw=s120"}
                 width={35}
                  height={35}
                  alt="nft"
                  objectFit='cover'
                  className='Gainer_Image'
                  />
                  </div>
            <div className={styles.NftCollectionFeed_Top_Des} onClick={GoToProfile}>
              <h4>Creator</h4>
              <p>@{item.profileName}</p>
            </div>
            <BiDotsVerticalRounded size={27} className={styles.NftCollectionFeed_Top_Dots}/>
          </div>
          <div  className={styles.NftCollectionFeed_Middle}>
          <Image
                 src={item.img}
                 width={700}
                  height={500}
                  alt="nft"
                  objectFit='cover'
                  />
          </div>
          <div className={styles.NftCollectionFeed_Bottoms}>
            <div className={styles.NftCollectionFeed_Bottoms_Logo} >
            <p className={styles.NftCollectionFeed_Bottoms_Title}>{item.title}</p>
            <div className={styles.Explore_Details_Bid_Img}>
                <Image
                 src={item?.ethLogo}
                  width={25}
                  height={25}
                  objectFit="cover"
                  className='Nft_Image_Logo'
                />
                </div>
            </div>
            <div className={styles.NftCollectionFeed_Bottoms_Like} >
            <AiOutlineHeart size={26}/>
              <p className={styles.NftCollectionFeed_Bottoms_Like_Count}>32</p>
            

            </div>
          </div>

      </div>
  )
}

export default NftCollection