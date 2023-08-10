'use client'

import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import PostCard from '../shared/postCard'
import { useAppSelector } from '@/redux/hooks'
import { selectPost } from '@/redux/features/postSlice'
import { useRouter } from 'next/navigation'

export default function PostCmp() {

    const router = useRouter()
    const postsFromRedux = useAppSelector(selectPost)
    useEffect(() => {
        // if no posts in redux, redirect to home page
        if (postsFromRedux.length === 0) {
            router.push('/')
        }
    }, [])

    // if no posts in redux, return empty box
    if (postsFromRedux.length === 0) {
        return <Box h={'100vh'}></Box>
    }

    // if posts in redux, return posts
    return (
        <Flex minH={'100vh'} flexDir={'column'}>
            <Heading textAlign={'center'} mt={30}>All posts</Heading>
            <Flex flexWrap={'wrap'} justifyContent={'center'} gap={5} mt={10} mb={10}>
                {postsFromRedux.length > 0 && postsFromRedux.map((post) => <PostCard key={post.id} post={post} />)}
            </Flex>
        </Flex>
    )
}
