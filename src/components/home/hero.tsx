'use client'

import { HomepageData } from '@/app/types'
import { Stack, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function Hero({ homePageData }: { homePageData: HomepageData }) {
    console.log(homePageData);

    return (
        <Flex
            w={'full'}
            h={'50vh'}
            backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        textShadow={'0 0 20px rgba(0,0,0,0.6)'}
                        lineHeight={1.2}
                        fontSize={['2xl', '3xl']}>
                        {homePageData.heading}
                    </Text>
                    <Text
                        color={'white'}
                        textShadow={'0 0 20px rgba(0,0,0,0.6)'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={['sm', 'md', 'lg']}>
                        {homePageData.paragraph}
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    )
}