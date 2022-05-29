import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NftFeed from './NftFeed'

const Nft = () => {
  return (
    <div>
        <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
        <Sidebar/>
         <NftFeed/>
    </div>
    </div>
  )
}

export default Nft