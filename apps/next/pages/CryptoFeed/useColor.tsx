import React, { useEffect, useState } from 'react'

const useColor = (value:number) => {
  const [check,setCheck]=useState(false)
  useEffect(()=>{
    if(value>=0){
      setCheck(true)
    }
  },[])
  return {
    color:check,
  }
}

export default useColor