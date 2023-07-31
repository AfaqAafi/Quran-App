import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  chapterTranslation: [],
  isLoading: false,
  error: null,
};

export const fetchChaptersTranslationById = createAsyncThunk(
  "fetchChaptersTranslationById/fetchChapters",
  async (id, translationId) => {
    let myTranslatedId = translationId.getState().translationId.translationId;
    const res = await axios(
      `https://api.quran.com/api/v4/quran/translations/${myTranslatedId}?chapter_number=${id}`
    );
    const data = await res.data;
    return data;
  }
);

export const fetchChapterTranslationSlice = createSlice({
  name: "chapterTranslationById",
  initialState,
  reducers: {
    clearDispatchTranslationById: (state) => {
      state.chapterTranslation = [];
    },
  },
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

export const { clearDispatchTranslationById } =
  fetchChapterTranslationSlice.actions;
export default fetchChapterTranslationSlice.reducer;
