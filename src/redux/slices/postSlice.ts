import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {urls} from "../../constants/urls.ts";
import {IPost} from "../../models/IPost.ts";

type postSliceType = {
    posts:IPost[];
}


const initialState:postSliceType = {posts:[]};

const loadPosts= createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI)=>{

        try {
            const posts = await   fetch(urls.posts.allPosts)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(posts);
        }
        catch(error){
            console.error(error);
            return thunkAPI.rejectWithValue('some error');
        }
    }
);


export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
                state.posts = action.payload
            })
            .addCase(loadPosts.rejected,(state, action)=>{
                console.log(state);
                console.log(action);
            })
});

export const postSliceActions={ ...postSlice.actions,loadPosts };
