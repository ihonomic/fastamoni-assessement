import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../constants";

// SIGN-UP - ACTIONS
export const signUpUser = createAsyncThunk(
  "signup",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await fetch(BASEURL + "/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      let data = await response.json();

      console.log([new Date()], data);

      if (response.status === 400) {
        return thunkAPI.rejectWithValue({ message: data?.error });
      } else if (response.status === 200) {
        return thunkAPI.fulfillWithValue({ ...data });
      } else {
        return thunkAPI.rejectWithValue({
          message: "Email and password doesn't match",
        });
      }
    } catch (e) {
      console.log("Error Login", e);
      return thunkAPI.rejectWithValue({ message: "Server Error" });
    }
  }
);
// LOGIN - ACTIONS
export const loginUser = createAsyncThunk(
  "login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await fetch(BASEURL + "/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      let data = await response.json();

      // console.log([new Date()], data);

      if (response.status === 400) {
        return thunkAPI.rejectWithValue({ message: data?.error });
      } else if (response.status === 200) {
        return thunkAPI.fulfillWithValue({ ...data });
      } else {
        return thunkAPI.rejectWithValue({
          message: "Email and password doesn't match",
        });
      }
    } catch (e) {
      console.log("Error Login", e);
      return thunkAPI.rejectWithValue({ message: "Server Error" });
    }
  }
);

// slice - STATE

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,

    userInfo: {
      token: "",
    },

    isFetching: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {
    clearState: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";

      return state;
    },

    logout: (state) => {
      (state.isAuthenticated = false),
        (state.userInfo = {
          token: "",
        }),
        (state.isFetching = false),
        (state.isSuccess = false),
        (state.isError = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    // ======== login
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.isAuthenticated = true;
      state.userInfo = payload;
      return state;
    });

    builder.addCase(
      loginUser.rejected,
      (state, { payload }: { payload: any }) => {
        state.isFetching = false;
        state.isError = true;

        state.message = payload?.message;
        return state;
      }
    );

    builder.addCase(loginUser.pending, (state) => {
      state.isFetching = true;
    });

    // ======== SignUp
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.isAuthenticated = true;
      state.userInfo = payload;
      return state;
    });

    builder.addCase(
      signUpUser.rejected,
      (state, { payload }: { payload: any }) => {
        state.isFetching = false;
        state.isError = true;

        state.message = payload?.message;
        return state;
      }
    );

    builder.addCase(signUpUser.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export const { clearState, logout } = userSlice.actions;
export const userSelector = (state: any) => state.user;
