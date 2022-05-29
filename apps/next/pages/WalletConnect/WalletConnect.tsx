import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
interface Props {
  top?: number;
  left?: number;
}
export const WalletConnect = ({top,left}:Props) => {
  return (
    <div style={{marginTop:top,marginLeft:left}}>
        <ConnectButton/>
    </div>
  )
}
