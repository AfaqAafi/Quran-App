import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  language: [],
  isLoading: false,
  error: null,
};

export const fetchLanguage = createAsyncThunk(
  "fetchLanguage/languageDiff",
  async () => {
    const res = await axios(`https://api.quran.com/api/v4/resources/languages`);
    const data = await res.data;
    return data;
  }
);

export const fetchLanguageSlice = createSlice({
  name: "languageDiff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLanguage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLanguage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.language.push(action.payload);
    });
    builder.addCase(fetchLanguage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default fetchLanguageSlice.reducer;
