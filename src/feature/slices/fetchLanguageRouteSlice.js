import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  languageRouteState: [],
  isLoading: false,
  error: null,
};

export const fetchLanguageRoute = createAsyncThunk(
  "fetchLanguageRoute/languageRoute",
  async () => {
    const res = await axios(
      `https://api.quran.com/api/v4/resources/translations?language=ur`
    );
    const data = await res.data;
    return data;
  }
);

export const fetchLanguageRouteSlice = createSlice({
  name: "languageRoute",
  initialState,
  reducers: {
    // clearDispatchTranslationById: (state) => {
    //   state.chapterTranslation = [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLanguageRoute.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLanguageRoute.fulfilled, (state, action) => {
      state.isLoading = false;
      state.languageRouteState.push(action.payload);
    });
    builder.addCase(fetchLanguageRoute.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// export const { clearDispatchTranslationById } =
//   fetchLanguageRouteSlice.actions;
export default fetchLanguageRouteSlice.reducer;
