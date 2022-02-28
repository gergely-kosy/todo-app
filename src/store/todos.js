import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      console.log("state", state);
      state.push({
        id: Date.now(),
        description: action.payload.description,
        resolved: false,
        edit: false,
      });
    },

    resolveTodos: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].resolved = !state[index].resolved;
    },

    saveEditTodos: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].description = action.payload.description;
      state[index].edit = false;
    },

    cancelEditTodos: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].edit = false;
    },

    startEditTodos: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].edit = true;
    },

    deleteTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    setInitialStateTodo: (state, action) => {
      return (state = []);
    },
  },
});

export const {
  deleteTodos,
  addTodos,
  resolveTodos,
  saveEditTodos,
  startEditTodos,
  cancelEditTodos,
  setInitialStateTodo,
} = slice.actions;

export default slice.reducer;

export const getTodo = (todoId) =>
  createSelector(
    (state) => state.todos,
    (todos) => todos[todos.findIndex((todo) => todo.id === todoId)]
  );

export const getTodos = createSelector(
  (state) => state.todos,
  (todos) => todos
);

export const getResolvedTodos = createSelector(
  (state) => state.todos,
  (todos) => todos.filter((todo) => todo.resolved === true)
);

export const getUnresolvedTodos = createSelector(
  (state) => state.todos,
  (todos) => todos.filter((todo) => todo.resolved !== true)
);
