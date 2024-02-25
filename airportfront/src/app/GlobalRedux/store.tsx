"use client";
import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./features/flightSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    user: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
