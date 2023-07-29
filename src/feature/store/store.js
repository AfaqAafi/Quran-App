import { configureStore } from "@reduxjs/toolkit";
import ToggleSidebarSlice from "../slices/ToggleSidebarSlice";
import fetchChapterSlice from "../slices/fetchChapterSlice";
import fetchChapterByIdSlice from "../slices/fetchChapterByIdSlice";
import fetchChapterTranslationSlice from "../slices/fetchChapterTranslation";

export const store = configureStore({
  reducer: {
    sidebar: ToggleSidebarSlice,
    chapters: fetchChapterSlice,
    chaptersById: fetchChapterByIdSlice,
    chaptersByIdTranslation: fetchChapterTranslationSlice,
  },
});
