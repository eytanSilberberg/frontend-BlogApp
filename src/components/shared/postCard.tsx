'use client'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    useColorModeValue,
} from '@chakra-ui/react'
import { Post } from '@/types'
import Link from 'next/link'
export default function PostCard({ post }: { post: Post }) {
    return (
        <Link
            href={`/posts/${post.id}`}
            className='post-card'
            aria-label={`Read more about ${post.title}`}
        >
            <Center >
                <Box
                    maxW={'350px'}
                    w={'full'}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={4}
                    overflow={'hidden'}>
                    <Box
                        className='image-wrapper'
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}>
                        <Image
                            src={
                                post.image
                            }
                            alt={post.title}
                            objectFit={'cover'}
                            mb={5}
                            w={'full'}
                            h={'full'}
                        />
                    </Box>
                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'xs'}
                        >
                            Blog
                        </Text>
                        <Heading
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            minW={500}
                            fontFamily={'body'}>
                            {post.title}
                        </Heading>
                        <Text color={'gray.500'} fontSize={'15px'}>
                            {post.description.length > 100 ? `${post.description.substring(0, 100)}...` : post.description}
                        </Text>
                    </Stack>

                </Box>
            </Center>
        </Link>
    )
}