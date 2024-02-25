import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface user {
  passport: string;
  password: string;
  email: string;
  birth?: string;
  Fname: string;
  Lname: string;
  country: string;
  state: string;
  street: string;
  sex: string;
}

interface Reuser {
  clients: {
    passport: string;
    password: string;
    email: string;
    birth?: string;
    Fname: string;
    Lname: string;
    country: string;
    state: string;
    street: string;
    sex: string;
  };
  token: string;
}
interface Login {
  password: string;
  email: string;
}
interface state {
  User: user | null;
  loginUser: Login | null;
  userInfo: Reuser | null;
}
const initialState: state = {
  User: null,
  loginUser: null,
  userInfo: null,
};

export const createUser = createAsyncThunk<user, any>(
  "user/create",
  async (user) => {
    const createPerson = await axios.post<user>(
      "http://localhost:7000/client",
      user
    );
    return createPerson.data;
  }
);
export const getUser = createAsyncThunk<Login, any>(
  "user/get",
  async (user) => {
    const getPerson = await axios.post<Login>(
      "http://localhost:7000/verify",
      user
    );
    return getPerson.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      console.log(action.payload);
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      console.log("loading");
    });
    builder.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<Login | any>) => {
        state.userInfo = action.payload;
        console.log(state.userInfo);
      }
    );
    builder.addCase(getUser.rejected, (state) => {
      console.log("error");
      console.log("rejected");
    });
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
