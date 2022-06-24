import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      CoinId:"binance",
      DexList: [] as any,
}

const DexFeatures = createSlice({
  name: "DexFeatures",
  initialState,
  reducers: {
    setCoinId:(state,action)=>{
      state.CoinId=action.payload.CoinId
    },
    setDexList:(state,action)=>{
      state.DexList.push(action.payload)
    }
  }
});

export const {
  setCoinId,
  setDexList
} = DexFeatures.actions
export const selectCoind=(state:any)=>state.DexFeatures.CoinId
export const selectDexList=(state:any)=>state.DexFeatures.DexList


export default DexFeatures.reducer