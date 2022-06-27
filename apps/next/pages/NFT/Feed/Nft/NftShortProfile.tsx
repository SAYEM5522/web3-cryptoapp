import React from 'react'
import styles from '../../NftCss/Feed/Nft/NftShortProfile.module.css'
import { NftCollection as Collection } from '../../../Data'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectNftSearch } from '../../../features/Nftfeatures'
import { useRouter } from 'next/router'

const NftShortProfile = () => {
  const router=useRouter()
  const search=useSelector(selectNftSearch)
  return (
    <div className={styles.NftShortProfile}>
      {
        Collection.filter((value:any,index:number)=>{
          if(search==="")
          {
            return null
          }
          else if(value.profileName.toLowerCase().includes(search.toLowerCase())||
          value.type.toLowerCase().includes(search.toLowerCase()))
          {
            return value
          }
        }).map((item,index)=>{
          const GoToProfile=()=>{
            router.push(`/NFT/Feed/UserNftProfile/${item.ProfileId}`)
          }
          return(
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
          </div>
          )
        })
      }
    </div>
  )
}

export default NftShortProfile