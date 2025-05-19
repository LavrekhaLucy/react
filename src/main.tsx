import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import {routes} from "./route/routes.tsx";
import {Provider} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {IUser} from "./models/IUser.ts";

type userSliceType = {
    users:IUser[];
}


const initialState:userSliceType = {users:[]};

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {}
})

const store = configureStore({
    reducer: {
        userSlice:userSlice.reducer,
        // postSlice:null
    }
});

    createRoot(document.getElementById('root')!)
    .render(
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>

    )

