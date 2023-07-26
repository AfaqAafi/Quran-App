import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSidebar: false
};

export const toggleSidebarSlice = createSlice({
  name: "counter",
  initialState,
reducers: {
    toggleSidebarAction: (state) => {
        state.toggleSidebar = !state.toggleSidebar
    }
 }
});

// Action creators are generated for each case reducer function
export const { toggleSidebarAction } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;
