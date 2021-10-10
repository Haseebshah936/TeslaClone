// import { configureStore } from "@reduxjs/toolkit";
// import carReducer from "../features/car/carSlice";

// export const store = configureStore({
//   reducer: {
//     counter: carReducer,
//   },
// });
import { createStore, combineReducers } from "@reduxjs/toolkit";
import carReducer from "../features/car/carReducer";

export const store = createStore(
  combineReducers({
    reducer: carReducer,
  })
);
