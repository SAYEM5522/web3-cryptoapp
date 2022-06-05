import React from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import NftsFeed from './NftsFeed'

const Nft = () => {
  return (
    <div>
    <div style={{flexDirection:"row",display:"flex",backgroundColor:"#1C1E2A",height:"100vh"}}>
     <Sidebar/>
     <NftsFeed/>
</div>
</div>
  )
}

export default Nft