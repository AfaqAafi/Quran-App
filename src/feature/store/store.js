import { configureStore } from "@reduxjs/toolkit";
import ToggleSidebarSlice from "../slices/ToggleSidebarSlice";
import fetchChapterSlice from "../slices/fetchChapterSlice";
import fetchChapterByIdSlice from "../slices/fetchChapterByIdSlice";
import fetchChapterTranslationSlice from "../slices/fetchChapterTranslation";
import fetchLanguageSlice from "../slices/fetchLanguageSlice";
import fetchLanguageRouteSlice from "../slices/fetchLanguageRouteSlice";
import manageTranslationIdSlice from "../slices/ManageTranslationId";
export const store = configureStore({
  reducer: {
    sidebar: ToggleSidebarSlice,
    chapters: fetchChapterSlice,
    chaptersById: fetchChapterByIdSlice,
    chaptersByIdTranslation: fetchChapterTranslationSlice,
    language: fetchLanguageSlice,
    languageRoute: fetchLanguageRouteSlice,
    translationId: manageTranslationIdSlice,
  },
});
