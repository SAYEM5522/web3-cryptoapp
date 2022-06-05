import { configureStore } from '@reduxjs/toolkit';
import AnalyticsReducer from '../features/Analytics';
import Nftfeatures from "../features/Nftfeatures"
import SideBarfeatures from "../features/SideBarfeatures"
export default configureStore({
  reducer: {
    Analytics: AnalyticsReducer,
    Nft:Nftfeatures,
    SideBar:SideBarfeatures
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
  
});