import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reciterId: null,
};

export const manageReciterIdSlice = createSlice({
  name: "mReciter",
  initialState,
  reducers: {
    setReciterId: (state, action) => {
      state.reciterId = action.payload;
    },
  },
});

export const { setReciterId } = manageReciterIdSlice.actions;
export default manageReciterIdSlice.reducer;
