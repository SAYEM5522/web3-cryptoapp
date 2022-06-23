import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import styles from "../Css/PoolCss/DexGraph.module.css"
import {
  Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const dataSelect=[
    {
      id:1,
      type:'7D',
      value:7
    },
    {
      id:2,
      type:'1M',
      value:30
    },
    {
      id:3,
      type:'6M',
      value:186
    },
    {
      id:4,
      type:'1Y',
      value:365
    },
  
  ]
const DexGraph = () => {
  const [Data,setData]=useState<any>([])
  const [SelectDate,setSelectDate]=useState<number>(7)
  const [currentIndex,setCurrentIndex]=useState<number>(0)
  const getData=async()=>{
    await axios.get(`https://api.coingecko.com/api/v3/exchanges/uniswap/volume_chart?days=${SelectDate}`).then((res)=>{
       setData(res.data)
    }).catch((err)=>{console.log(err)})
}
useEffect(()=>{
  getData(),
  ()=>getData()
},[SelectDate])
const value=Data.map((item:any)=>item[1])
const labels=Data.map((item:any)=>item[0])

const item = {
  labels:labels,
  datasets:[
    {
      label: '',
      data: value,
      borderColor: '#0052FF',
      backgroundColor: '#0052FF',
      
    }
  ]
 
};
const options = {
  responsive: true,
  elements:{
    point:{
      radius:1
    }
  },
  scales: {
    x: {
        
        ticks: {
            stepSize: 0.5,
            maxTicksLimit:8
        }
    }
}
};

  return (
    
      // <div className={styles.DexGraphH} >

     <div className={styles.DexGraph}>
      <h3 className={styles.DexCaption}>Market Volume</h3>

       <div className={styles.CryptoGraph_Header}>
      {
        dataSelect.map((value,index)=>{
          const Select=()=>{
            setSelectDate(value.value),
            setCurrentIndex(index)
          }
          return(
            <div onClick={Select} className={styles.CryptoGraph_List} key={index}>
              <p style={{"color":(currentIndex===index)?"blue":"white"}}>{value.type}</p>
            </div>
          )
        })
      }
      </div>
    <Line options={options}  data={item} />
    </div>
    // </div>
    
  )
}

export default DexGraph