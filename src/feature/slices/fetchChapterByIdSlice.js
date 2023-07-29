import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  chaptersById: [],
  isLoading: false,
  error: null,
};

export const fetchByIdChapters = createAsyncThunk(
  "chaptersId/fetchByIdChapters",
  async (id) => {
    const res = await axios(
      `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
    );
    const data = await res.data;
    return data;
  }
);

export const fetchChapterByIdSlice = createSlice({
  name: "chaptersId",
  initialState,
  reducers: {
    clearDispatch: (state) => {
      state.chaptersById = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchByIdChapters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchByIdChapters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chaptersById.push(action.payload);
    });
    builder.addCase(fetchByIdChapters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearDispatch } = fetchChapterByIdSlice.actions;

export default fetchChapterByIdSlice.reducer;
