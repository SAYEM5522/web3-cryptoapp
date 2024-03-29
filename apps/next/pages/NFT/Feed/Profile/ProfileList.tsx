import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { NFTPROFILE } from '../../../Data'
import styles from "../../NftCss/Feed/Profile/Profile.module.css"
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'
const TypeSelect=[
  {
    id:1,
    title:"Trending",
  },
  {
    id:2,
    title:"Art",
  },{
    id:3,
    title:"Music",
  },{
    id:4,
    title:"Top",
  },{
    id:5,
    title:"New",
  },{
    id:6,
    title:"Sports",
  },{
    id:7,
    title:"Utilities",
  },{
    id:8,
    title:"Photography",
  },
]

const ProfileList = () => {
  const router=useRouter()
  const [TypeSelecting,setTypeSlecting]=useState("Trending")
  const [open, setOpen] = useState(false)
  const onClick = useCallback(() => {
    setOpen(!open)
  }, [open])
  return (
    <div>
      <div style={{ position: "relative" }}>
      <div className={styles.Profile_Type_Select} onClick={onClick} >
        <p >{TypeSelecting}</p>
        <IoIosArrowDown size={25} color='white' className={styles.Profile_Type_Icon} />
      </div>

      {
        open?
        <div className={styles.TypeSelectList}>
          {
                  TypeSelect.map((item,index)=>{
                    const TypeList=()=>{
                      setTypeSlecting(item.title)
                    }
                    return(
                      <div key={index} className={styles.TypeSelectList_Item} onClick={TypeList} >
                      <p>{item.title}</p>
                      </div>
                    )
                   
                  })
              }
        </div>
        :null
      }
      
    
      </div>
    <div className={styles.ProfileFeed__List} >
      {
        NFTPROFILE.map((item,index)=>{
          const GotoProfile=()=>{
            router.push(`/NFT/Feed/UserNftProfile/${item.ProfileId}`)

          }
          if(TypeSelecting===item.ProfileType){
            return(
              <div className={styles.ProfileFeed} key={index} onClick={GotoProfile}>
               <div className={styles.Profile_Cover}  >
               <Image
              src={item.ProfileCoverPhoto}
              width={310}
              height={200}
              objectFit="cover"
              className='Nft_Profile_Image'
              quality={100}
              />
               </div>
               <div className={styles.Profile_Avatar}>
               <Image src={item.ProfileImage}
              width={50}
              height={50}
              objectFit="cover"
              className='NFT_AVATAR'
              />
              </div>
              <div className={styles.Profile_Des_List}>
              <p className={styles.ProfileName}>{item.ProfileName}</p>
              <p className={styles.ProfileDes}>{item.ProfileDes}</p>
              </div>
               
              </div>
            )
          }
          
        })
      }
    </div>
    </div>
  )
}

export default ProfileList