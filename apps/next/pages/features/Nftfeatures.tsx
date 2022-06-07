import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabIndex:0,
  ExploreList:[] as any,
  userProfileName:"",
  userProfileImg:"",
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
    },
    setUserProfileName:(state,action)=>{
      state.userProfileName=action.payload.name,
      state.userProfileImg=action.payload.img
    }
  }
});

export const {
  setTabIndex,
  setExploreList,
  setUserProfileName
} = Nftfeatures.actions
export const selecttabindex=(state:any)=>state.Nft.tabIndex
export const selectExploreList=(state:any)=>state.Nft.ExploreList
export const selectuserProfileName=(state:any)=>state.Nft.userProfileName
export const selectuserProfileImg=(state:any)=>state.Nft.userProfileImg
export default Nftfeatures.reducer