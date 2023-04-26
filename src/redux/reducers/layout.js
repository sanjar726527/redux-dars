import { TOGGLE_DARK_MODE } from "../types";

const initialState = {
  darkMode: "light",
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: state.darkMode === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default layoutReducer;
