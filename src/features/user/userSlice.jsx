import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes = {
  winter: "winter",
  dracula: "dracula",
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const initialState = {
  user: { username: "codding addict" },
  theme: getThemeFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("user login");
    },
    logoutUser: (state) => {
      console.log("user logout");
    },
    toggleTheme: (state) => {
      const { winter, dracula } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
