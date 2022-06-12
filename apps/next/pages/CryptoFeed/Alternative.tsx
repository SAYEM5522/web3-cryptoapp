import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { selectAnalytics2, selectCountryName, selectGainerPageNumber, selectTokenId, setAnalytics2, setCurrentPrice } from '../features/Analytics'
import AllAssets from './AllAssets'
import CryptoGraph from './CryptoGraph'
import CryptoHeader from './CryptoHeader'
import CryptoStats from './CryptoStats'
import styles from '../Css/CryptoFeed/Alternative.module.css'
const Alternative = () => {
  const dispatch=useDispatch()
  const [data,setData]=useState([])
  const moneyInitial=useSelector(selectCountryName)
  // const pageNumber=useSelector(selectGainerPageNumber)
  const [loading,setLoading]=useState(true)
  const [pageNumber,setPageNumber]=useState(0)
  const getData=async()=>{
  await  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${moneyInitial}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`).then(res=>{
    dispatch(setAnalytics2(res.data))
     setData(res.data)
     setLoading(false)
    }).catch
    (err=>console.log(err))
}
useEffect(()=>{
  getData(),
  ()=>getData()
},[moneyInitial,pageNumber])
const handlePageClick = (event:any) => {
    setPageNumber(event.selected + 1)
};
  return (
    <div>
      {
        loading ? <div>Loading...</div> :
        <div>
      <CryptoHeader data={data} />
      <CryptoGraph/>
      <CryptoStats/>
      <AllAssets data={data}/>
      <div>
      <ReactPaginate
        breakLabel="...."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={269}
        previousLabel="< Previous"
        // renderOnZeroPageCount={null}
        className={styles.Pagination}
        marginPagesDisplayed={2}
        activeClassName={styles.Pagination_Active}
        pageClassName={styles.Pagination_Item}
        previousLinkClassName={styles.Pagination_Item_Previous}
        nextLinkClassName={styles.Pagination_Item_Next}
      />
      </div>
        </div>
      }
    </div>
  )
}

export default Alternative