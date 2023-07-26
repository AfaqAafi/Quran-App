import { configureStore } from "@reduxjs/toolkit";
import ToggleSidebarSlice from "../slice/ToggleSidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: ToggleSidebarSlice,
  },
});
