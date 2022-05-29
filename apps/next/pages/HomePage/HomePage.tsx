import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import HomePageMiddle from './HomePageMiddle'

const HomePage = () => {
  return (
    <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
      <Sidebar/>
      <HomePageMiddle/>
    </div>
  )
}

export default HomePage