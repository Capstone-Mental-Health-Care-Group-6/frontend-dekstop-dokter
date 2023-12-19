import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    dataLogin: null, // Change this to null initially
  },
  reducers: {
    setDataLogin: (state, action) => {
      state.dataLogin = action.payload;
    },
  },
});

export const { setDataLogin } = userSlice.actions;
export default userSlice.reducer;