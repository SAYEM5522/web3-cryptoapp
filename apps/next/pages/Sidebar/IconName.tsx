import React from 'react'
import { IconType } from 'react-icons'
interface Props {
  Icon: IconType
}
function IconName({Icon}:Props) {
  return (
    <div>
        <Icon size={30} color="white"/>
    </div>
  )
}

export default IconName