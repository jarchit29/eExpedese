import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./Authentication";
import PartnerIdSlice from "./PartnerId";
import { useDispatch } from "react-redux";
import ResponseFromLoginSlice from "./ResponseFromLogin";
import ResponseFromPropertyListSlice from "./ResponseFromPropertyList";
import ResponseFromPropertyDetailsSlice from "./ResponseFromPropertyDetials";
import ResponseFromMessagesSlice from "./ResponseFromMessages";
import FilterOptionsSlice from "./FilterOptions";
import AlertStatusSlice from "./AlertStatus";

const Store = configureStore({
  reducer: {
    Authentication: AuthenticationSlice,
    PartnerId: PartnerIdSlice,
    ResponseFromLogin: ResponseFromLoginSlice,
    ResponseFromPropertyList:ResponseFromPropertyListSlice,
    ResponseFromPropertyDetails:ResponseFromPropertyDetailsSlice,
    ResponseFromMessages:ResponseFromMessagesSlice,
    FilterOptions:FilterOptionsSlice,
    AlertStatus: AlertStatusSlice,
  },
});

export default Store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
