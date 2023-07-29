import { configureStore } from "@reduxjs/toolkit";
import ToggleSidebarSlice from "../slice/ToggleSidebarSlice";
import fetchChapterSlice from "../slice/fetchChapterSlice";

export const store = configureStore({
  reducer: {
    sidebar: ToggleSidebarSlice,
    chapters: fetchChapterSlice,
  },
});
