'use client'

import { GetPostRes, Post } from '@/types'
import { erasePostFromDb, savePostToDb, updatePostInDb } from '@/redux/actions/post'
import { useAppDispatch } from '@/redux/hooks'
import { chakraToastError, chakraToastSuccess, deletePost, savePost, updatePost } from '@/services/util.service'
import { useRouter } from 'next/navigation'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Textarea,
    useColorModeValue,
    Image,
    useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function EditPageCmp({ postSSR }: { postSSR: GetPostRes | null }) {
    const post = postSSR?.data
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState(post ? post.title : '')
    const [description, setDescription] = useState(post ? post.description : '')
    const [image, setImage] = useState(post ? post.image : '')
    const [id] = useState<string | null>(post ? post.id! : null)
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const [buttonClicked, setButtonClicked] = useState<null | string>(null)


    // TODO- add handle save function
    const handleSave = async () => {
        if (!title || !description || !image) {
            toast(chakraToastError('Please fill all fields'))
        }
        const newPost: Post = {
            title,
            description,
            image
        }
        setIsLoading(true)
        setButtonClicked('save')
        try {
            if (id) {
                // in case of existing id - update
                newPost.id = id
                await dispatch(updatePostInDb(newPost))
                // await updatePost(id, newPost)
            }
            else {
                // in case of existing id - create
                await dispatch(savePostToDb(newPost))
            }
            toast(chakraToastSuccess('Post saved successfully'))
        } catch (e) {
            toast(chakraToastError('Something went wrong'))
        }
        setIsLoading(false)
        setButtonClicked(null)
    }

    const handleDelete = async () => {
        setButtonClicked('delete')
        setIsLoading(true)
        try {
            if (id) {
                await dispatch(erasePostFromDb(id))
                chakraToastSuccess('Post deleted successfully')
                setTimeout(() => {
                    router.push('/posts')
                }, 2000)
            }
        } catch (e) {
            toast(chakraToastError('Something went wrong'))
        }
        setIsLoading(false)
        setButtonClicked(null)
    }

    return (
        <Flex
            className='edit-page-wrapper'
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                className='edit-page-stack'
                spacing={4}
                w={'full'}
                maxW={'2xl'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Add/Edit Article
                </Heading>
                <FormControl id="title" >
                    <FormLabel
                        className='edit-page-title-label'
                    >Title</FormLabel>
                    <Input
                        className='edit-page-title-input'
                        placeholder="Your title"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }
                        }
                    />
                </FormControl>
                <FormControl id="password" >
                    <FormLabel
                        className='edit-page-description-label'
                    >Your article</FormLabel>
                    <Textarea
                        className='edit-page-description-input'
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }
                        } />
                </FormControl>
                {post?.image && <Image src={image} alt="Article image" />}
                <FormControl id="image" >
                    <FormLabel
                        className='edit-page-image-label'
                    >Image Url</FormLabel>
                    <Input
                        className='edit-page-image-input'
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value)
                        }
                        } />
                </FormControl>
                <Flex
                    className='edit-page-buttons'
                    gap={5} flexDir={['column', 'column', 'row']}>
                    {id && <Button
                        bg={'red.400'}
                        flexGrow={1}
                        color={'white'}
                        onClick={handleDelete}
                        isDisabled={isLoading && buttonClicked === 'save'}
                        isLoading={isLoading && buttonClicked === 'delete'}
                        _hover={{
                            bg: 'red.500',
                        }}>
                        Delete
                    </Button>}
                    <Button
                        bg={'blue.400'}
                        flexGrow={1}
                        color={'white'}
                        isDisabled={isLoading && buttonClicked === 'save'}
                        isLoading={isLoading && buttonClicked === 'delete'}
                        onClick={handleSave}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Save
                    </Button>
                </Flex>
            </Stack>
        </Flex>
    )
}