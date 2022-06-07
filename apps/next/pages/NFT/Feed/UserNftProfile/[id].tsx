import { useRouter } from 'next/router'
import React from 'react'

const UserNftProfile = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div>
      {
        pid
      }
    </div>
  )
}

export default UserNftProfile