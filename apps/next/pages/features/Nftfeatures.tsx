import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabIndex:0
}

const Nftfeatures = createSlice({
  name: "Nftfeatures",
  initialState,
  reducers: {
    setTabIndex:(state,action)=>{
      state.tabIndex=action.payload.tabIndex
    }
  }
});

export const {
  setTabIndex
} = Nftfeatures.actions
export const selecttabindex=(state:any)=>state.Nft.tabIndex
export default Nftfeatures.reducer