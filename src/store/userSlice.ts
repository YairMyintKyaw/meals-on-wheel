import { createSlice } from "@reduxjs/toolkit";

export interface userInterface {
  name: string;
  mail: string;
}

const initialState: userInterface = {
  name: "test",
  mail: "test@gmail.com",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.name = "";
      state.mail = "";
    },
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
