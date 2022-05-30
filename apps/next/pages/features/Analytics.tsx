import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  analytics: [] as any,
  CountryName: 'bdt',
  Current_Price: '',
  TokenName:"Bitcoin"

}

const Analytics = createSlice({
  name: "Analytics",
  initialState,
  reducers: {
    setAnalytics: (state, action) => {
      state.analytics.push(action.payload)  
      },
    setCountryName: (state, action) => {
      state.CountryName = action.payload.name,
      state.Current_Price = action.payload.current_price,
      state.TokenName = action.payload.token_name
    },

  }
});

export const {setAnalytics,setCountryName} = Analytics.actions
export const selectAnalytics = (state:any) => state.Analytics.analytics
export const selectCountryName = (state:any) => state.Analytics.CountryName
export const selectCurrentPrice = (state:any) => state.Analytics.Current_Price
export const selectTokenName = (state:any) => state.Analytics.TokenName
export default Analytics.reducer