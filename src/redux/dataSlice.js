import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteDataFunc: (state, action) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((data) =>
          data.id == action.payload.id ? { ...data, ...action.payload } : data
        ),
      ];
    },
    ascendDataFunc: (state) => {
      state.data = state.data.sort((a, b) => a.price - b.price);
    },
    descendDataFunc: (state) => {
      state.data = state.data.sort((a, b) => b.price - a.price);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  ascendDataFunc,
  descendDataFunc
} = dataSlice.actions;

export default dataSlice.reducer;
