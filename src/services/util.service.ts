'use client'
import { HomepageData, Post, ToastInput } from "@/app/types"
// import { store } from "@/redux/store"
import axios from "axios"
export const getPosts = async () => {
  const res=await fetch('https://blogpy-1-p2885582.deta.app/api/v1/posts/',{
    method:'GET',
    })
    const data=await res.json()
    return data
  }
  
  export const getHpData = async () => {
  const res=await axios.get('https://blogpy-1-p2885582.deta.app/api/v1/hpd')
  const data=await res.data
  return data
  }

  export const getPost= async (id:string)=>{
    const res=await fetch(`https://blogpy-1-p2885582.deta.app/api/v1/posts/${id}`,{
      method:'GET',
    })
    const data=await res.json()
    return data
  }

  export const updatePost= async (id:string,post:Post)=>{
    console.log('asdfasdfasdf');
    const res=await axios.put(`https://blogpy-1-p2885582.deta.app/api/v1/posts/${id}`,post)
    const data=res.data.data
    
    return data
  }
  export const savePost= async (post:Post)=>{
    const res=await axios.post(`https://blogpy-1-p2885582.deta.app/api/v1/posts/`,post)
    
    return res.data.data
  }
  export const deletePost= async (id:string)=>{
    const res=await axios.delete(`https://blogpy-1-p2885582.deta.app/api/v1/posts/${id}`)
    const data=await res.data
    return data
  }

  export const chakraToastSuccess=(message:string)=>{
    return {
      title: "Success!",
      description: message,
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    } as ToastInput
  }

  export const chakraToastError=(message:string)=>{
    return {
      title: "Error!",
      description: message,
      status: "error",
      duration: 3000,
      position: "top",
      isClosable: true,
    } as ToastInput
  }

