import React from 'react'
import { IconType } from 'react-icons'
import styles from "../Css/Sidebar/Sidebar.module.css"
import { useWindowSize } from '../useWindowSize';

interface Props {
  Icon: any
}
function IconName({Icon}:Props) {
  const {width,height}=useWindowSize();
  return (
    <div className={styles.Icon}  
    >
        <Icon size={30} color="white" />
    </div>
  )
}

export default IconName