import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice.ts";
import {postSlice} from "./slices/postSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer,
    }
});