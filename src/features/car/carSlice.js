import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      id: 0,
      title: "Model S",
    },
    {
      id: 1,
      title: "Model 3",
    },
    {
      id: 2,
      title: "Model X",
    },
    {
      id: 3,
      title: "Model Y",
    },
    {
      id: 4,
      title: "Lowest Cost Solar Panels in America",
    },
    {
      id: 5,
      title: "Solar for New Roofs",
    },
    {
      id: 6,
      title: "Accessories",
    },
    {
      id: 7,
      title: "Cybertruck",
    },
    {
      id: 8,
      title: "Existing Inventory",
    },
    {
      id: 9,
      title: "Utilities",
    },
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState: initialState,
  reducers: {},
});

export const selectCar = (state) => state.car.cars;

export default carSlice.reducer;
