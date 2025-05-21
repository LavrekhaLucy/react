import {IComment} from "../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../services/api.service.ts";

type CommentSliceType ={
    comments:IComment[]
}

const initCommentSliceState:CommentSliceType= {comments:[]};

const loadComments = createAsyncThunk('loadComments',async (_,thunkApi )=>{
    const comments = await getAll<IComment[]>('/comments');
    return thunkApi.fulfillWithValue(comments);
})

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initCommentSliceState,

    reducers: {},
    extraReducers:builder => builder.addCase(loadComments.fulfilled,(state, action:PayloadAction<IComment[]>)=>{
        state.comments = action.payload;

    }),
})

export const commentsAction = {...commentSlice.actions, loadComments};