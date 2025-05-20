import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {urls} from "../../constants/urls.ts";

type userSliceType = {
    users:IUser[];
}


const initialState:userSliceType = {users:[]};

const loadUsers= createAsyncThunk(
    'userSlice/loadUsers',
   async (_, thunkAPI)=>{

       try {
           const users =await   fetch(urls.users.allUsers)
               .then(value => value.json())

           return thunkAPI.fulfillWithValue(users);
       }
       catch(error){
           console.error(error);
           return thunkAPI.rejectWithValue('some error');
       }
          }
       );


export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected,(state, action)=>{
                console.log(state);
                console.log(action);
            })
});

export const userSliceActions={ ...userSlice.actions,loadUsers };