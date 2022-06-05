import React from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import ExploreFeed from './ExploreFeed'

const Explore = () => {
  return (
    <div>
        <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
         <Sidebar/>
         <ExploreFeed/>
    </div>
    </div>
  )
}

export default Explore