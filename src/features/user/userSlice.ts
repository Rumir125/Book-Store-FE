import { createSlice, Slice } from "@reduxjs/toolkit";

export const userSlice: Slice = createSlice({
  name: "user",
  initialState: {
    authorized: false,
    userId: null,
    username: null,
  },
  reducers: {
    setAuthorized: (state, action) => {
      state.authorized = action.payload;
    },
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthorized, setUser } = userSlice.actions;

export default userSlice.reducer;
