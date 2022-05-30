import { configureStore } from '@reduxjs/toolkit';
import AnalyticsReducer from '../features/Analytics';
export default configureStore({
  reducer: {
    Analytics: AnalyticsReducer
  },
  
});