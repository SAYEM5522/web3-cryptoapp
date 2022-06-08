import { useRouter } from 'next/router'
import React from 'react'
import UserProfileHeader from './UserProfileHeader'
import styles from "../../NftCss/Feed/UserNftProfile/UserNftProfile.module.css"
import UserProfileFeed from './UserProfileFeed'
const UserNftProfile = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className={styles.UserNftProfile}>
     <UserProfileHeader  placeHolders={"Search by collections, NFT or user"}/>
     <UserProfileFeed/>
    </div>
  )
}

export default UserNftProfile