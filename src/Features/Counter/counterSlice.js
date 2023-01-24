import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
    incByAmt: (state, action) => {
      state.count += action.payload;
    },
    decByAmt: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { inc, dec, incByAmt, decByAmt } = counterSlice.actions;
export default counterSlice.reducer;
