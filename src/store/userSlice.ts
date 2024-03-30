import { createSlice } from "@reduxjs/toolkit";


export type userType =  "member" | "partner" | "donor" | "caregiver" | "volunteer" |"admin"| null;
interface UserData {
  type: userType;
  user: any;
  token: string | null
}
const initialState:UserData = {
  type: "partner",
  token:"", 
  user:{}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = {};
      state.type=null;
      state.token=null;
    },
    setUser: (state, {payload})=>{
      state.user = payload;
      state.type = payload.type;
      state.token = payload.token;
    }
  },
});

export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
