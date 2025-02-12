import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import LoggedInUserSliceState from "../Login/LoginSlice";

export const store = configureStore({
  reducer: {
    loggedInUser: LoggedInUserSliceState,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
