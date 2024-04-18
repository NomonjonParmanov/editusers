import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  nmae: "newUsers",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
    values: JSON.parse(localStorage.getItem("newUsers")) || [],
  },
  reducers: {
    addToUsers(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    removeFromUsers(state, action) {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.removeItem("users", JSON.stringify(state.value));
      localStorage.removeItem("newUsers", JSON.stringify(state.value));
    },
    editUsers(state, action) {
      state.value = [...state.values, action.payload];
      localStorage.setItem("newUsers", JSON.stringify(state.values));
    },
  },
});

export const { addToUsers, removeFromUsers, editUsers } = usersSlice.actions;
export default usersSlice.reducer;
