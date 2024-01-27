import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    carName(state, action) {
      state.name = action.payload;
    },
    carCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(build) {
    build.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { carName, carCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
