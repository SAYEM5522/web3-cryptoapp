import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
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
  const [Data,setData]=useState<any>([])
  const getData=async()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=bdt&days=365').then(res=>{
         setData(res.data.prices)
        }).catch
        (err=>console.log(err))
  }
  useEffect(()=>{
      getData(),
      ()=>getData()
  },[])
  const label=Data.map((item:any)=>item[0])
  const value=Data.map((item:any)=>item[1])
  console.log(label)
 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const item = {
    labels: label,
    datasets:[
      {
        label: 'Dataset 1',
        data: value,
        borderColor: '#0052FF',
        backgroundColor: '#0052FF',
        
      }
    ]
   
  };
  return (
    <div>
    <Line   data={item} />
    </div>
  )
}

export default CryptoGraph