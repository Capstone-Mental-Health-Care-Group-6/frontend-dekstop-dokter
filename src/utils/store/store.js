import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../service/userSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if needed
  },
});

export default store;