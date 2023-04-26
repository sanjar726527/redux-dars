import { dispatch } from "../store";
import { ADD_NEW_TASK, EDIT_TASK, REMOVE_TASK, TASK_TOGGLE } from "../types";

export const addNewTask = (value) => {
  dispatch({ type: ADD_NEW_TASK, payload: value });
};

export const removeTask = (index) => {
  dispatch({ type: REMOVE_TASK, payload: index });
};
export const toggleTask = (index, isCompleted) => {
  dispatch({ type: TASK_TOGGLE, payload: { completed: isCompleted, index } });
};
export const editTask = (index, title) => {
  dispatch({ type: EDIT_TASK, payload: { index, title } });
};
