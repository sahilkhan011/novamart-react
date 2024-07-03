import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.isLoggedIn = true;
      state.data = action.payload;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.data = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
