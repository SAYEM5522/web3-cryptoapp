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
    }

  }
});

export const {setAnalytics,setCountryName,setTokenIndex,setCurrentPrice,setTokenName,setAnalytics2,setTokenId} = Analytics.actions
export const selectAnalytics = (state:any) => state.Analytics.analytics
export const selectAnalytics2 = (state:any) => state.Analytics.analytics2
export const selectCountryName = (state:any) => state.Analytics.CountryName
export const selectCurrentPrice = (state:any) => state.Analytics.Current_Price
export const selectTokenName = (state:any) => state.Analytics.TokenName
export const selectTokenIndex = (state:any) => state.Analytics.TokenIndex
export const selectTokenImg = (state:any) => state.Analytics.TokenImg
export const selectTokenId = (state:any) => state.Analytics.tokenId
export default Analytics.reducer