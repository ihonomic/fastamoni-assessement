import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../constants";

// LOGIN - ACTIONS
export const loginUser = createAsyncThunk(
  "login",
  async (
    { estate_id, password }: { estate_id: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await fetch(BASEURL + "/auth-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estate_id, password }),
      });
      let data = await response.json();

      // console.log(data, "=========> DATA");

      if (response.status === 401) {
        return thunkAPI.rejectWithValue({ message: data?.error });
      } else if (response.status === 200) {
        return thunkAPI.fulfillWithValue({ ...data });
      } else {
        return thunkAPI.rejectWithValue({
          message: "Estate ID and password doesn't match",
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

    logout: (state) => {},
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
  },
});

export const { clearState, logout } = userSlice.actions;
export const userSelector = (state: any) => state.user;
