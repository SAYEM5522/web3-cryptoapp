import React from 'react'
import { IconType } from 'react-icons'
import styles from "../Css/Sidebar/Sidebar.module.css"

interface Props {
  Icon: IconType
}
function IconName({Icon}:Props) {
  return (
    <div className={styles.Icon}>
        <Icon size={30} color="white" />
    </div>
  )
}

export default IconName