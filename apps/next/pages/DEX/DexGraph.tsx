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
const DexGraph = () => {
  const [Data,setData]=useState<any>([])
  const getData=async()=>{
    await axios.get("https://api.coingecko.com/api/v3/exchanges/uniswap/volume_chart?days=30").then((res)=>{
       setData(res.data)
    }).catch((err)=>{console.log(err)})
}
useEffect(()=>{
  getData()
  // ()=>getData()
},[])
const value=Data.map((item:any)=>item[1])
const labels=Data.map((item:any)=>item[0])
console.log(labels)

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
    <div className={styles.DexGraph}>
    <Line options={options}  data={item} />
    </div>
  )
}

export default DexGraph