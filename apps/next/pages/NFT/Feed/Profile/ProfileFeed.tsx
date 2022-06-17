import React from 'react'
import NftHeader from '../../Header/NftHeader'
import ProfileList from './ProfileList'
import styles from "../../NftCss/Feed/Profile/Profile.module.css"

const ProfileFeed = () => {
  return (
    <div style={{flex:0.82}} className={styles.Profile} >
      <NftHeader/>
      <div >
        <ProfileList/>
      </div>
    </div>
  )
}

export default ProfileFeed