import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  analytics: [] as any,
  analytics2: [] as any,
  CountryName: 'bdt',
  Current_Price:null,
  TokenName:"Bitcoin",
  TokenIndex:0,
  TokenImg:"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
  tokenId:"bitcoin",
  market_cap:null,
  total_supply:null,
  circulating_supply:null,
  high:null,
  low:null,
  market_cap_rank:null,
  price_change_percentage_1h_in_currency:null,
  price_change_percentage_24h_in_currency:null,
  price_change_percentage_7d_in_currency:null,
  GainerIndex:0,
  GainerCall:false,

}

const Analytics = createSlice({
  name: "Analytics",
  initialState,
  reducers: {
    setAnalytics: (state, action) => {
      state.analytics.push(action.payload)  
      },
      setAnalytics2: (state, action) => {
        state.analytics2.push(action.payload)  
        },
    setCountryName: (state, action) => {
      state.CountryName = action.payload.name
      // state.Current_Price=action.payload.current_price
    },
    setTokenIndex: (state, action) => {
      state.TokenIndex = action.payload
    },
    setCurrentPrice:(state,action)=>{
      state.Current_Price=action.payload.current_price
     
    },
    setTokenName:(state,action)=>{
      state.TokenName=action.payload.TokenName,
      state.TokenImg=action.payload.Tokenimg
    },
    setTokenId:(state,action)=>{
      state.tokenId=action.payload.id
    },
    setMarket:(state,action)=>{
      state.market_cap=action.payload.market_cap,
      state.total_supply=action.payload.total_supply,
      state.circulating_supply=action.payload.circulating_supply,
      state.high=action.payload.high,
      state.low=action.payload.low,
      state.market_cap_rank=action.payload.market_cap_rank,
      state.price_change_percentage_1h_in_currency=action.payload.price_change_percentage_1h_in_currency,
      state.price_change_percentage_24h_in_currency=action.payload.price_change_percentage_24h_in_currency,
      state.price_change_percentage_7d_in_currency=action.payload.price_change_percentage_7d_in_currency
    },
    setGainerIndex:(state,action)=>{
      state.GainerIndex=action.payload.index,
      state.GainerCall=action.payload.call
    }

  }
});

export const {setAnalytics,
  setCountryName,setTokenIndex,
  setCurrentPrice,setTokenName,
  setAnalytics2,setTokenId,
  setMarket,setGainerIndex
} = Analytics.actions
export const selectAnalytics = (state:any) => state.Analytics.analytics
export const selectAnalytics2 = (state:any) => state.Analytics.analytics2
export const selectCountryName = (state:any) => state.Analytics.CountryName
export const selectCurrentPrice = (state:any) => state.Analytics.Current_Price
export const selectTokenName = (state:any) => state.Analytics.TokenName
export const selectTokenIndex = (state:any) => state.Analytics.TokenIndex
export const selectTokenImg = (state:any) => state.Analytics.TokenImg
export const selectTokenId = (state:any) => state.Analytics.tokenId
export const selectMarketCap = (state:any) => state.Analytics.market_cap
export const selectTotalSupply = (state:any) => state.Analytics.total_supply
export const selectCirculatingSupply = (state:any) => state.Analytics.circulating_supply
export const selectHigh = (state:any) => state.Analytics.high
export const selectLow = (state:any) => state.Analytics.low
export const selectMarketCapRank = (state:any) => state.Analytics.market_cap_rank
export const selectPriceChangePercentage1hInCurrency = (state:any) => state.Analytics.price_change_percentage_1h_in_currency
export const selectPriceChangePercentage24hInCurrency = (state:any) => state.Analytics.price_change_percentage_24h_in_currency
export const selectPriceChangePercentage7dInCurrency = (state:any) => state.Analytics.price_change_percentage_7d_in_currency
export const selectGainerIndex = (state:any) => state.Analytics.GainerIndex
export const selectGainerCall = (state:any) => state.Analytics.GainerCall
export default Analytics.reducer