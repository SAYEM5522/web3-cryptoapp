import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabIndex:0,
  ExploreList:[] as any
}

const Nftfeatures = createSlice({
  name: "Nftfeatures",
  initialState,
  reducers: {
    setTabIndex:(state,action)=>{
      state.tabIndex=action.payload.tabIndex
    },
    setExploreList:(state,action)=>{
      state.ExploreList.push(action.payload.ExploreList)
    }
  }
});

export const {
  setTabIndex,
  setExploreList
} = Nftfeatures.actions
export const selecttabindex=(state:any)=>state.Nft.tabIndex
export const selectExploreList=(state:any)=>state.Nft.ExploreList
export default Nftfeatures.reducer