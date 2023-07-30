import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translationId: 131,
};

export const manageTranslationIdSlice = createSlice({
  name: "translationId",
  initialState,
  reducers: {
    setTranslationId: (state, action) => {
      state.translationId = action.payload;
    },
  },
});

export const { setTranslationId } = manageTranslationIdSlice.actions;
export default manageTranslationIdSlice.reducer;
