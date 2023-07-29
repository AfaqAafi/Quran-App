import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  chapters: [],
  isLoading: false,
  error: null,
};

export const fetchChapters = createAsyncThunk(
  "chapters/fetchChapters",
  async () => {
    const res = await axios(
      "https://api.quran.com/api/v4/chapters?language=en"
    );
    const data = await res.data;
    return data;
  }
);

export const fetchChapterSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    clearDispatch: (state) => {
      state.chapters = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChapters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChapters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chapters.push(action.payload);
    });
    builder.addCase(fetchChapters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearDispatch } = fetchChapterSlice.actions;

export default fetchChapterSlice.reducer;
