import { configureStore } from '@reduxjs/toolkit';
import AnalyticsReducer from '../features/Analytics';
export default configureStore({
  reducer: {
    Analytics: AnalyticsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
  
});