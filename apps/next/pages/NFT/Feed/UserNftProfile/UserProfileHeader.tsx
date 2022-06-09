import Image from 'next/image'
import React from 'react'
import { WalletConnect } from '../../../WalletConnect/WalletConnect'
import styles from "../../NftCss/Feed/UserNftProfile/UserprofileHeader.module.css"
interface Props {
  placeHolders:string;
  background?:string;
  color?:string;
  border?:string;
  inputBackground?:string;
}
const UserProfileHeader = ({placeHolders,background,color,border,inputBackground}:Props) => {
  return (
    <div  className={styles.UserProfileHeader} style={{"backgroundColor":background,"color":color,"border":border }} >
      <div className={styles.UserProfileHeader_Top}>
      <Image  
        src={'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'}
        width={38}
        height={38}
        objectFit="cover"
        />
        <p style={{"color":color}}>Ethscan</p>
      </div>
      <div className={styles.UserProfileHeader_Middle}>
      <input type={'text'} style={{"backgroundColor":inputBackground,"color":color,"border":border }}className={styles.UserProfileHeader_Middle_Input}  placeholder={placeHolders} />
      </div>
      <div className={styles.UserProfileHeader_Bottom}>
        <WalletConnect/>
      </div>
      
    </div>
  )
}

export default UserProfileHeader