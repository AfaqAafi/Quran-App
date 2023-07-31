import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  audioArr: [],
  isLoading: false,
  error: null,
};

export const fetchAudio = createAsyncThunk(
  "audio/fetchAudio",
  async (id, reciterId) => {
    let myReciterId = reciterId.getState().reciterId.reciterId;
    const res = await axios(
      `https://api.quran.com/api/v4/chapter_recitations/${myReciterId}/${id}`
    );
    const data = await res.data;
    return data;
  }
);

export const fetchAudioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    clearDispatchAudio: (state) => {
      state.audioArr = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAudio.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAudio.fulfilled, (state, action) => {
      state.isLoading = false;
      state.audioArr.push(action.payload);
    });
    builder.addCase(fetchAudio.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearDispatchAudio } = fetchAudioSlice.actions;

export default fetchAudioSlice.reducer;
