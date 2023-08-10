import React from 'react'
import PostDetailsCmp from '../../../components/posts/PostDetailsCmp'


export default async function PostDetails({ params }: { params: { postDetails: string } }) {
    const { postDetails: postId } = params
    // const data: GetPostRes = await getPost(postId) as unknown as GetPostRes
    const res = await fetch(`http://127.0.0.1:8000/api/v1/posts/${postId}`, {
        method: 'GET',
        cache: 'no-store',
    })
    const data = await res.json()
    console.log('data', data);
    return (
        <PostDetailsCmp postSSR={data} />
        // <div></div>
    )
}
