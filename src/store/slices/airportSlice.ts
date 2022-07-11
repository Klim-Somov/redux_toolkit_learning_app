import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAirport } from "../../models/models";

interface AirportState {
  loading: boolean;
  error: string;
  airports: IAirport[];
}
const initialState: AirportState = {
  loading: false,
  error: "",
  airports: [],
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    feching(state) {
      state.loading = false;
    },

    fetchSuccess(state, action: PayloadAction<IAirport[]>) {
      state.loading = false;
      state.airports = action.payload; 
    },

    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default airportSlice.reducer 