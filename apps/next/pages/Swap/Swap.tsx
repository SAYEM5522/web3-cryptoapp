import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SwapMiddle from './SwapMiddle'
const Swap = () => {
  return (
    <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
    <Sidebar/>
    <SwapMiddle/>
  </div>
  )
}

export default Swap