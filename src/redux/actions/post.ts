'use client'
import { createAsyncThunk } from "@reduxjs/toolkit";

import { Post } from "@/app/types";
import { deletePost, getPost, getPosts, savePost, updatePost } from "@/services/util.service";


export const getPostsFromDb = createAsyncThunk(
    'post/getPosts',
    async () => {
        console.log('sssss');
        const data = await getPosts()
        console.log(`data`, data);
        
        return data.data
    }
)

export const erasePostFromDb = createAsyncThunk(
    'post/erasePost',
    async (id: string) => {
        const data = await deletePost(id)
        return data
    }
)

export const updatePostInDb = createAsyncThunk(
    'post/updatePost',
    async (post:Post) => {
        const {id} = post
        const data = await updatePost(id!,post)
        return data
    }
)

export const getPostFromDb = createAsyncThunk(
    'post/getPost',
    async (id: string) => {
        const data = await getPost(id)
        return data
    }
)

export const savePostToDb = createAsyncThunk(
    'post/savePost',
    async (post: Post) => {
        const data = await savePost(post)
        return data
    }
)