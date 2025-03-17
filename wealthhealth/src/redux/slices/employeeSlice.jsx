import { createSlice } from "@reduxjs/toolkit";
import liste from "./Employe.json";

const initialState = {

  employees: liste,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
