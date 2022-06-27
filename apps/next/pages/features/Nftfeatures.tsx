import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabIndex:0,
  ExploreList:[] as any,
  userProfileName:"",
  userProfileImg:"",
  NftSearch:"",
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
    },
    setNftSearch:(state,action)=>{
      state.NftSearch=action.payload.NftSearch
    }
  }
});

export const {
  setTabIndex,
  setExploreList,
  setUserProfileName,
  setNftSearch
} = Nftfeatures.actions
export const selecttabindex=(state:any)=>state.Nft.tabIndex
export const selectExploreList=(state:any)=>state.Nft.ExploreList
export const selectuserProfileName=(state:any)=>state.Nft.userProfileName
export const selectuserProfileImg=(state:any)=>state.Nft.userProfileImg
export const selectNftSearch=(state:any)=>state.Nft.NftSearch
export default Nftfeatures.reducer