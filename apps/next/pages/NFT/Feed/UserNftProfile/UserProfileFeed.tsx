import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectuserProfileImg, selectuserProfileName } from '../../../features/Nftfeatures'
import styles from "../../NftCss/Feed/UserNftProfile/UserProfileFeed.module.css"
import { NFTPROFILE } from '../../../Data'
import { useRouter } from 'next/router'
import { NftCollection } from '../../../Data'
import ExploreDetails from '../Explore/ExploreDetails'
const UserProfileFeed = () => {

  const router=useRouter()
  const id=router.query.id
  return (
    <div>
        {
          NFTPROFILE.map((item:any,index:number)=>{
            if(item.ProfileId===Number(id)){
              console.log(item.ProfileId)
              return(
                <div key={index}>
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
        src={item.ProfileImage}
        width={110}
        height={120}
        objectFit="cover"
        className='UserProfileFeed_Header_PrpfileImage'
        
        />
        </div>
        <p className={styles.UserProfileFeed_Feed_Name} >{item.ProfileName}</p>
       
        </div>
        <div className={styles.UserProfileFeed_Feed_Details}>
          <div className={styles.UserProfileFeed_Feed_Details_1}>
            <h5>Floor price</h5>
            <p>{item.ProfileFloorPrice}</p>
          </div>
          <div className={styles.UserProfileFeed_Feed_Details_2}>
            <h5>Market Cap</h5>
            <p>$2.7K</p>
          </div>
          <div className={styles.UserProfileFeed_Feed_Details_3}>
            <h5>Items</h5>
            <p>{item.ProfileItems}</p>
          </div>
          <div className={styles.UserProfileFeed_Feed_Details_4}>
            <h5>Total Volume</h5>
            <p>{item.ProfileVolume}</p>
          </div>
        </div>
        <div>
          <p className={styles.UserProfileFeed_Des}>A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moonbird unlocks private club membership and additional benefits the longer you hold them. We call it nesting – because, obviously.</p>
        </div>
        <div className={styles.UserProfileFeed_Feed_Item}>
          {
                  NftCollection.map((value:any,index:number)=>{
                    if(value.ProfileId===Number(id)){
                      return(
                        <div key={index}  className={styles.UserProfileFeed_Feed_Item_Des}>
                          <ExploreDetails item={value}/>
                         </div>
                      )
                    }
                  })
          }
        </div>

        
      </div> 
      </div>
          )}})
        }
      {/* <div className={styles.UserProfileFeed_Header}>
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
        src={item.ProfileImage}
        width={110}
        height={120}
        objectFit="cover"
        className='UserProfileFeed_Header_PrpfileImage'
        
        />
        </div>
        <p className={styles.UserProfileFeed_Feed_Name} >{item.ProfileName}</p>
       
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
        
      </div> */}
    </div>
  )
}

export default UserProfileFeed