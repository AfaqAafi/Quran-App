import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import ToggleSidebarSlice from "../slices/ToggleSidebarSlice";
import fetchChapterSlice from "../slices/fetchChapterSlice";
import fetchChapterByIdSlice from "../slices/fetchChapterByIdSlice";
import fetchChapterTranslationSlice from "../slices/fetchChapterTranslation";
import fetchLanguageSlice from "../slices/fetchLanguageSlice";
import fetchLanguageRouteSlice from "../slices/fetchLanguageRouteSlice";
import manageTranslationIdSlice from "../slices/ManageTranslationId";
import fetchReciterSlice from "../slices/fetchReciterSlice";
import fetchAudioSlice from "../slices/fetchAudioSlice";
import manageReciterIdSlice from "../slices/manageReciterId";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  sidebar: ToggleSidebarSlice,
  chapters: fetchChapterSlice,
  chaptersById: fetchChapterByIdSlice,
  chaptersByIdTranslation: fetchChapterTranslationSlice,
  language: fetchLanguageSlice,
  languageRoute: fetchLanguageRouteSlice,
  translationId: manageTranslationIdSlice,
  reciter: fetchReciterSlice,
  audio: fetchAudioSlice,
  reciterId: manageReciterIdSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
