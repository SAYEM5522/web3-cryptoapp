import React, { useCallback, useEffect,useState } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectCountryName, selectTokenId, selectTokenName } from '../features/Analytics';
import styles from "../Css/CryptoFeed/CryptoGraph.module.css"
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
    type:'1H',
    value:0.4
  },
  {
    id:2,
    type:'24H',
    value:1
  },
  {
    id:3,
    type:'7D',
    value:7
  },
  {
    id:4,
    type:'1M',
    value:30
  },
  {
    id:5,
    type:'1Y',
    value:365
  }
]
const CryptoGraph = () => {
  const Token=useSelector(selectTokenId)
  const moneyInitial=useSelector(selectCountryName)
  const [Data,setData]=useState<any>([])
  const[selectDate,setSelectDate]=useState(0.4)
  const[currentIndex,setCurrentIndex]=useState(0)
  const getData=async()=>{
      await  axios.get(`https://api.coingecko.com/api/v3/coins/${Token}/market_chart?vs_currency=${moneyInitial}&days=${selectDate}`).then(res=>{
         setData(res.data.prices)
        }).catch
        (err=>console.log(err))
  }
  useEffect(()=>{
      getData(),
      ()=>getData()
  },[Token,moneyInitial,selectDate])
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
    <div className={styles.CryptoGraph} >
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
  )
}

export default CryptoGraph