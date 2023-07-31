import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  reciterData: [],
  isLoading: false,
  error: null,
};

export const fetchReciter = createAsyncThunk(
  "fetchReciter/reciter",
  async () => {
    const res = await axios(
      `https://api.quran.com/api/v4/resources/chapter_reciters?language=en`
    );
    const data = await res.data;
    return data;
  }
);

export const fetchReciterSlice = createSlice({
  name: "reciter",
  initialState,
  reducers: {
    clearReciter: (state) => {
      state.reciterData = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReciter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReciter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reciterData.push(action.payload);
    });
    builder.addCase(fetchReciter.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const { clearReciter } = fetchReciterSlice.actions;
export default fetchReciterSlice.reducer;
