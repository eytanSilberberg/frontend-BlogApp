import React from 'react'
import PostDetailsCmp from '../../../components/posts/PostDetailsCmp'


export default async function PostDetails({ params }: { params: { postDetails: string } }) {
    const { postDetails: postId } = params
    // const data: GetPostRes = await getPost(postId) as unknown as GetPostRes
    const res = await fetch(`https://blogpy-1-p2885582.deta.app/api/v1/posts/${postId}`, {
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
