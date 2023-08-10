import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Post } from "@/app/types";
import { erasePostFromDb, getPostsFromDb, savePostToDb, updatePostInDb } from "../actions/post";

interface InitialState {
    value: {
        posts: Post[],
        timeStamp:null|number
    }
    status: 'idle' | 'loading' | 'failed'
}

const initialState = {
    value: {
        posts: [],
        timeStamp:null
    }
    ,
    status: 'idle'
} as InitialState

export const postSlice = createSlice({
    name: "post",
    initialState,
    // non async reducers
    reducers: {
        setPostsReducer: (state, action: PayloadAction<Post[]>) => {
            state.value.posts = action.payload
        },
        setTimeStampReducer: (state, action: PayloadAction<number>) => {
            state.value.timeStamp = action.payload
        }
    },
    // async reducers
    extraReducers:(builder)=>{
        builder
        .addCase(getPostsFromDb.fulfilled, (state, action: PayloadAction<Post[]>) => {
            console.log(`action.payload`, action.payload)
            state.value.posts = action.payload
            state.status = 'idle'
        })
        .addCase(updatePostInDb.fulfilled, (state, action: PayloadAction<Post>) => {
            const index = state.value.posts.findIndex((post) => post.id === action.payload.id)
            state.value.posts[index] = action.payload
            state.status = 'idle'
        })
        .addCase(erasePostFromDb.fulfilled, (state, action: PayloadAction<string>) => {
            const index = state.value.posts.findIndex((post) => post.id === action.payload)
            state.value.posts.splice(index, 1)
            state.status = 'idle'
        })
        .addCase(savePostToDb.fulfilled, (state, action: PayloadAction<Post>) => {
            state.value.posts.push(action.payload)
            state.status = 'idle'
        }
        )
}}
)

export const { setPostsReducer,setTimeStampReducer } = postSlice.actions

// Selects for faster getting data from store
export const selectPost = (state: RootState) => state.post.value.posts
export const selectTimeStamp = (state: RootState) => state.post.value.timeStamp
export default postSlice.reducer
