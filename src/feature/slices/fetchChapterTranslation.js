import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  chapterTranslation: [],
  isLoading: false,
  error: null,
};
let translationId = 131;
export const fetchChaptersTranslationById = createAsyncThunk(
  "fetchChaptersTranslationById/fetchChapters",
  async (id) => {
    const res = await axios(
      `https://api.quran.com/api/v4/quran/translations/${translationId}?chapter_number=${id}`
    );
    const data = await res.data;
    return data;
  }
);

export const fetchChapterTranslationSlice = createSlice({
  name: "chapterTranslationById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChaptersTranslationById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChaptersTranslationById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chapterTranslation.push(action.payload);
    });
    builder.addCase(fetchChaptersTranslationById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default fetchChapterTranslationSlice.reducer;
