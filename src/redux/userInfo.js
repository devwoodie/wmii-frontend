import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "userInfo",
    initialState : {
        value: {
            displayName: ""
        },
    },
    reducers : {
        userInfoData : (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { userInfoData } = userSlice.actions;

export default userSlice.reducer;