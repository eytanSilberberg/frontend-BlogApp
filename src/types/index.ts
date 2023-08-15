import { UseToastOptions } from "@chakra-ui/react";

export interface Post{
    id?: string|null
    title: string;
    description: string;
    image: string;

}

export interface HomepageData{

    heading:string
    paragraph:string
}

export interface HomePageDataRes{
    status:string
    data:HomepageData
}

export interface PostData{
    status:string
    data:Post
}

export interface ToastInput{
    title:string,
      description:string,
      status:UseToastOptions['status'],
      duration: 3000,
      isClosable: true,
}

export interface getPostsRes{
    data:Post[]
    res:string
    timeStamp:number
}

export interface GetPostRes{
    data:Post
    res:string
    timeStamp:number
}