import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import {IRoom} from "../../types/roomTypes"

interface RoomState {
  rooms: IRoom[];
}

const initialState: RoomState = {
  rooms: [],
}

export const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom: (state, action: PayloadAction<IRoom>) => { 
      state.rooms.push(action.payload);
    }
  }
})

export const { addRoom } = roomSlice.actions;
export const selectRoom = (state: RootState) => state.rooms.rooms;
export default roomSlice.reducer;