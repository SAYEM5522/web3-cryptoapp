import { configureStore } from '@reduxjs/toolkit';
import AnalyticsReducer from '../features/Analytics';
import Nftfeatures from "../features/Nftfeatures"
import SideBarfeatures from "../features/SideBarfeatures"
import DexFeatures from '../features/DexFeatures';
export default configureStore({
  reducer: {
    Analytics: AnalyticsReducer,
    Nft:Nftfeatures,
    SideBar:SideBarfeatures,
    DexFeatures:DexFeatures
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
  
});