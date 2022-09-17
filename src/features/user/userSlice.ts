import { createSlice, Slice } from "@reduxjs/toolkit";

export const userSlice: Slice = createSlice({
  name: "user",
  initialState: {
    authorized: false,
  },
  reducers: {
    setAuthorized: (state, action) => {
      state.authorized = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthorized } = userSlice.actions;

export default userSlice.reducer;
