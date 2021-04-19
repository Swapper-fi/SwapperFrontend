import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "../../types";

const initialState: Themes = {
  isDark: true,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: {
      reducer(state, action: PayloadAction<boolean, string>) {
        state.isDark = action.payload;
      },
      prepare(payload: boolean) {
        return { payload };
      },
    },
  },
});
export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
