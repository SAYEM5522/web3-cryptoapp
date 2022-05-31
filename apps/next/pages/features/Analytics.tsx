import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  analytics: [] as any,
  CountryName: 'bdt',
  Current_Price: '',
  TokenName:"Bitcoin",
  TokenIndex:0,
  TokenImg:"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"

}

const Analytics = createSlice({
  name: "Analytics",
  initialState,
  reducers: {
    setAnalytics: (state, action) => {
      state.analytics.push(action.payload)  
      },
    setCountryName: (state, action) => {
      state.CountryName = action.payload.name
      // state.Current_Price = action.payload.current_price,
      // state.TokenName = action.payload.TokenName
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
    }

  }
});

export const {setAnalytics,setCountryName,setTokenIndex,setCurrentPrice,setTokenName} = Analytics.actions
export const selectAnalytics = (state:any) => state.Analytics.analytics
export const selectCountryName = (state:any) => state.Analytics.CountryName
export const selectCurrentPrice = (state:any) => state.Analytics.Current_Price
export const selectTokenName = (state:any) => state.Analytics.TokenName
export const selectTokenIndex = (state:any) => state.Analytics.TokenIndex
export const selectTokenImg = (state:any) => state.Analytics.TokenImg
export default Analytics.reducer