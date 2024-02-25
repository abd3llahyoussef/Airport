import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";

interface flight {
  cityFrom: string; //departureAirport
  cityTo: string; //arrivalAirport
  passengers: string;
  class: string;
  takeOffDate: string; //departureDate
  arrivalDate: string;
}

interface Flight {
  flightNumber: Number;
  takeOffTime: TimeRanges;
  takeOffDate: Date;
  arrivelDate: Date;
  cityFrom: String;
  cityTo: String;
  Duration: Number;
  airlineId: String;
}

interface State {
  flightInfo: flight[];
  flights: Flight[];
  choosenFlight: Flight[];
  isLoading: boolean;
  user: string;
}

const initialState: State = {
  flightInfo: [],
  flights: [],
  choosenFlight: [],
  isLoading: false,
  user: "",
};

export const getALLflights = createAsyncThunk<Flight, flight>(
  "flights/getALLflights",
  async (data) => {
    console.log(data);
    const res = await axios.post<Flight>("http://localhost:7000/flights", data);
    return res.data;
  }
);

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.flightInfo = action.payload;
    },
    getFlight: (state, action) => {
      state.choosenFlight = action.payload;
      console.log(state.choosenFlight);
    },
    setName: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getALLflights.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(
        getALLflights.fulfilled,
        (state, action: PayloadAction<Flight>) => {
          state.isLoading = true;
          state.flights.push(action.payload);
          console.log(action.payload);
        }
      )
      .addCase(getALLflights.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
      });
  },
});

export const { setInfo, getFlight, setName } = flightSlice.actions;
export default flightSlice.reducer;
