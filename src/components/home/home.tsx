'use client'
import { HomePageDataRes, getPostsRes } from '@/types'
import React, { useEffect } from 'react'
import PostCard from '../shared/postCard'
import {
    Flex,
    Heading
} from '@chakra-ui/react'
import Hero from './hero'
import { useAppSelector } from '@/redux/hooks'
import { selectPost, setPostsReducer, setTimeStampReducer } from '@/redux/features/postSlice'
import { useDispatch } from 'react-redux'

export default function HomeCmp({ postsSSR, homePageDataSSR }: { postsSSR: getPostsRes, homePageDataSSR: HomePageDataRes }) {
    const dispatch = useDispatch()
    const postsFromRedux = useAppSelector(selectPost)

    const { data: homePageData } = homePageDataSSR
    useEffect(() => {
        dispatch(setPostsReducer(postsSSR.data))
        dispatch(setTimeStampReducer(postsSSR.timeStamp))
    }, [])

    // Display relevant posts, either from Redux store or from server-side props
    const relevantPosts = postsFromRedux.length > 0 ? postsFromRedux.slice(0, 2) : postsSSR.data.slice(0, 2)
    return (
        <>
            <Flex className='home-wrapper' flexDir={'column'} alignItems={'center'}>
                <Hero homePageData={homePageData} />
                <Heading fontSize={['xl', '3xl']} my={10} >{'WHAT\'S NEW'}</Heading>
                <Flex justifyContent={'center'} gap={5} flexWrap={'wrap'} mb={20}>
                    {relevantPosts.map((post) => <PostCard key={post.id} post={post} />)}
                </Flex>
            </Flex>
        </>
    )
}
