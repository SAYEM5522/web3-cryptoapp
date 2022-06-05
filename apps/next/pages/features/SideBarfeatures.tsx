import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   sidebarIndex:0
}

const SideBarfeatures = createSlice({
  name: "SideBarfeatures",
  initialState,
  reducers: {
    setSidebarIndex:(state,action)=>{
      state.sidebarIndex=action.payload.sidebarIndex
    }
  }
});

export const {setSidebarIndex} = SideBarfeatures.actions
export const selectsidebarindex=(state:any)=>state.SideBar.sidebarIndex

export default SideBarfeatures.reducer