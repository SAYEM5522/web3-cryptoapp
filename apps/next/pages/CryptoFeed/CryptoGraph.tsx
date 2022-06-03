import React, { useCallback, useEffect,useState } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectCountryName, selectTokenId, selectTokenName } from '../features/Analytics';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CryptoGraph = () => {
  const Token=useSelector(selectTokenId)
  const moneyInitial=useSelector(selectCountryName)
  const [Data,setData]=useState<any>([])
  const getData=async()=>{
      await  axios.get(`https://api.coingecko.com/api/v3/coins/${Token}/market_chart?vs_currency=${moneyInitial}&days=${7}`).then(res=>{
         setData(res.data.prices)
        }).catch
        (err=>console.log(err))
  }
  useEffect(()=>{
      getData(),
      ()=>getData()
  },[Token,moneyInitial])
  const label=Data.map((item:any)=>item[0])
  const value=Data.map((item:any)=>item[1])

 
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
              maxTicksLimit:10
          }
      }
  }
  };
  const item = {
    labels: label,
    datasets:[
      {
        label: '',
        data: value,
        borderColor: '#0052FF',
        backgroundColor: '#0052FF',
        
      }
    ]
   
  };
  return (
    <div>
    <Line options={options}  data={item} />
    </div>
  )
}

export default CryptoGraph