import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectuserProfileImg, selectuserProfileName } from '../../../features/Nftfeatures'
import styles from "../../NftCss/Feed/UserNftProfile/UserProfileFeed.module.css"
const UserProfileFeed = () => {
  const userName=useSelector(selectuserProfileName)
  const imgUrl=useSelector(selectuserProfileImg)
  return (
    <div>
      <div className={styles.UserProfileFeed_Header}>
      <Image  
        src={'https://lh3.googleusercontent.com/ouzjfA0LotbHC92vuDph9JDeg7Z4ZFo12Pr9GJpfSAZSrnXDOubJn0eTvinwzUTPsWhnLLq5ocjcDSrpNV0_MYIjueVJrzFlE6p0=s2500'}
        width={1370}
        height={280}
        objectFit="cover"
        className='UserProfileFeed_Header_Image'

        />
      </div>
      <div className={styles.UserProfileFeed_Feed}>
        <div className={styles.UserProfileFeed_Feed_Des}>
        <div className={styles.UserProfileFeed_Feed_Img}>
        <Image  
        src={imgUrl}
        width={110}
        height={120}
        objectFit="cover"
        className='UserProfileFeed_Header_PrpfileImage'
        
        />
        </div>
        <p className={styles.UserProfileFeed_Feed_Name} >{userName}</p>
       
        </div>
        <div className={styles.UserProfileFeed_Feed_Details}>
          <div className={styles.UserProfileFeed_Feed_Details_1}>
            <h5>Floor price</h5>
            <p>$2.7K</p>
          </div>
          <div className={styles.UserProfileFeed_Feed_Details_2}>
            <h5>Market Cap</h5>
            <p>$2.7K</p>
          </div>
          <div className={styles.UserProfileFeed_Feed_Details_3}>
            <h5>Items</h5>
            <p>$2.7K</p>
          </div>
          <div className={styles.UserProfileFeed_Feed_Details_4}>
            <h5>Total Volume</h5>
            <p>$2.7K</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default UserProfileFeed