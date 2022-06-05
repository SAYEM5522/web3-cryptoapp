import React from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import StatsFeed from './StatsFeed'

const Stats = () => {
  return (
    <div>
    <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
     <Sidebar/>
     <StatsFeed/>
</div>
</div>
  )
}

export default Stats