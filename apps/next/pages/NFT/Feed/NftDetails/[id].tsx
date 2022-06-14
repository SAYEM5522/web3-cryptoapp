import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import GainerHeader from '../../../Gainer/GainerHeader'
import styles from "../../NftCss/Feed/NftDetails/NftDetails.module.css"
import {AiOutlineHeart} from 'react-icons/ai'
const NftCollection=[
  {
    id:1,
    img:"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg",
    title:"Art #40560",
    price:0.5,
    bid:0.5,
    time:"03:17:00",
    profileName:"John Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png"
  },
  {
    id:2,
    img:"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg",
    title:"Nft Art #40560",
    price:0.8,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png"




  },
  {
    id:3,
    img:"https://www.arweave.net/EXUJt80FIogASexqNQojt5gNCW243w5m_u782ZlIXck?ext=png",
    title:"Faceless Nft #43580",
    price:0.001,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png"
    


  },
  {
    id:4,
    img:"https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2021/03/18143417/artofcybersecurity_banking_1920x1080.jpg",
    title:"The world of nft",
    price:0.35,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png"



  },
  {
    id:5,
    img:"https://www.arweave.net/EXUJt80FIogASexqNQojt5gNCW243w5m_u782ZlIXck?ext=png",
    title:"Faceless Nft #43580",
    price:0.5,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png"



  },
  {
    id:6,
    img:"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg",
    title:"Art #40560",
    price:0.59,
    bid:0.5,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png"


  },
  {
    id:7,
    img:"https://www.arweave.net/EXUJt80FIogASexqNQojt5gNCW243w5m_u782ZlIXck?ext=png",
    title:"Art #40560",
    price:0.100,
    bid:0.8,
    time:"03:17:00",
    profileName:"Richard Doe",
    ethLogo:"https://flyclipart.com/thumb2/eth-ether-ethereum-icon-with-png-and-vector-format-for-free-738452.png"


  },

]
const NftDetails = () => {
  const router=useRouter()
  const id=router.query.id
  return (
    <div>
      {
        NftCollection.map(item=>{
          if(item.id==Number(id)){
            return(
              <div>
                <GainerHeader/>
                <div className="row">
                  <div className={styles.Nft_Details}>
                    <div className={styles.Nft_Details_Header}>
                      <Image src={item.ethLogo} width={34} height={34}/>
                      <AiOutlineHeart/>
                      
                    </div>
                  <Image
              src={item.img}
              width={460}
              height={500}
              objectFit="cover"
              className='Nft_Details_Image'
              />
                  </div>
                </div>
              </div>
        )
      }})}
    </div>
  )
}

export default NftDetails