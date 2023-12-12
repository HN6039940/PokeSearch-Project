import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const styleElementSlice = createSlice({
  name: "styleElement",
  initialState,
  reducers: {
    toggleOverLay: (state, action) => {
      const { payload } = action;
      state.isOpen = payload;
    },
  },
});

export const { toggleOverLay } = styleElementSlice.actions;
export default styleElementSlice.reducer;
