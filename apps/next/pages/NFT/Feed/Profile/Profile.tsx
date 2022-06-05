import React from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import ProfileFeed from './ProfileFeed'

const Profile = () => {
  return (
    <div>
    <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
     <Sidebar/>
     <ProfileFeed/>
</div>
</div>
  )
}

export default Profile