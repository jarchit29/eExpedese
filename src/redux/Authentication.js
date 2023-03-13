import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
    logout: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { login, logout } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   alertStatus: false,
// };

// export const AlertStatus = createSlice({
//   name: "AlertStatus",
//   initialState,
//   reducers: {
//     setStatus: (state, action) => {
//       state.auth = action.payload;
//     },
//   },
// });

// export const { setStatus } = AlertStatus.actions;

// export default AlertStatus.reducer;
