import React from 'react'
import PostDetailsCmp from '../../../components/posts/PostDetailsCmp'
import { getPostData } from '@/services/server.util.service';
import { Metadata, ResolvingMetadata } from 'next';
import { Post } from '@/types';

type Props = {
    params: { postDetails: string }
}

export async function generateMetadata(
    { params }: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const { postDetails: postId } = params
    console.log(postId);


    const res = await getPostData(postId)
    const post: Post = res.data
    console.log(res);

    // optionally access and extend (rather than replace) parent metadata

    return {
        title: `DailyTechBytes-${post.title}`,
        openGraph: {
            images: post.image,
        },
    }
}


export default async function PostDetails({ params }: { params: { postDetails: string } }) {
    const { postDetails: postId } = params
    const data = await getPostData(postId)
    return (
        <PostDetailsCmp postSSR={data} />
        // <div></div>
    )
}
