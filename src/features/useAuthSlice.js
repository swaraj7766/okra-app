import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "userAuth/login",
  async ({ name, password }, thunkAPI) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/token",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
          name,
          password,
        },
      });
      let data = await response.data;
      if (response.status === 200 && response.data.code === 0) {
        sessionStorage.setItem("rmstoken", data.payload.token.token);
        sessionStorage.setItem("rmsuser", data.payload.user.name);
        return data.payload.user;
      } else {
        return thunkAPI.rejectWithValue(data.payload.reason);
      }
    } catch (e) {
      console.log("Error", e.response.statusText);
      return thunkAPI.rejectWithValue(e.response.statusText);
    }
  }
);

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    name: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
    setUser: (state, { payload }) => {
      state.name = payload;
      return state;
    },
    logoutUser: (state) => {
      state.name = "";
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";
      return state;
    },
  },
  extraReducers: {
    // Extra reducer comes here
    [loginUser.fulfilled]: (state, { payload }) => {
      state.name = payload?.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState, setUser, logoutUser } = userAuthSlice.actions;
export const userAuthSelector = (state) => state.userAuth;
