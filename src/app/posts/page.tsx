import React from 'react'
import PostsCmp from '../../components/posts/postsCmp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: ' Posts',
    description: 'all posts related to tech!',
    metadataBase: new URL('http://localhost:3000/')
}


export default function PostPage() {
    return (
        <PostsCmp />
    )
}
