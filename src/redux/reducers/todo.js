import { ADD_NEW_TASK, EDIT_TASK, REMOVE_TASK, TASK_TOGGLE } from "../types";

const initialState = {
  tasks: [{ title: "Soups", completed: false }],
};
const todoReducer = (state = initialState, action) => {
  let tasks;
  console.log(action);
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { title: action.payload, completed: false }],
      };
    case REMOVE_TASK:
      tasks = [...state.tasks];
      tasks.splice(action.payload, 1);
      return { ...state, tasks };
    case TASK_TOGGLE:
      tasks = [...state.tasks];
      tasks[action.payload.index].completed = action.payload.completed;
      return { ...state, tasks };
    case EDIT_TASK:
      tasks = [...state.tasks];
      tasks[action.payload.index].title = action.payload.title;
      return { ...state, tasks };
    default:
      return state;
  }
};
export default todoReducer;
