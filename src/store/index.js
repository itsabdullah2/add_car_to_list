import { configureStore } from "@reduxjs/toolkit";
import { carName, carCost, formReducer } from "./slices/FormSlice";
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from "./slices/CarsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, carName, carCost, changeSearchTerm, addCar, removeCar };
