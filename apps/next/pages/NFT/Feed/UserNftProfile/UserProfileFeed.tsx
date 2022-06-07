import Image from 'next/image'
import React from 'react'
import styles from "../../NftCss/Feed/UserNftProfile/UserProfileFeed.module.css"
const UserProfileFeed = () => {
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

      </div>
    </div>
  )
}

export default UserProfileFeed