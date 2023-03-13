import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertStatus: false,
};

export const AlertStatusSlice = createSlice({
  name: "AlertStatus",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.alertStatus = action.payload;
    },
  },
});

export const { setStatus } = AlertStatusSlice.actions;

export default AlertStatusSlice.reducer;