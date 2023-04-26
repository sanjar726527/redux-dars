import { dispatch } from "../store";
import { TOGGLE_DARK_MODE } from "../types";

export const toggleTheme = (theme) => {
  dispatch({
    type: TOGGLE_DARK_MODE,
    payload: theme === "light" ? "dark" : "light",
  });
};
