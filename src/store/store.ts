import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "../features/rooms/roomSlice";

export const store = configureStore({
  reducer: {
    rooms: roomSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;