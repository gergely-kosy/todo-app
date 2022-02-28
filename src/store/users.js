import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUsers: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
      });
    },

    setInitialStateUser: (state, action) => {
      return (state = []);
    },
  },
});

export const { addUsers, setInitialStateUser } = slice.actions;

export default slice.reducer;
