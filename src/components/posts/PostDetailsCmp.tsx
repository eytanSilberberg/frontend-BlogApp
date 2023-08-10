'use client'
import { PostData } from '@/app/types'
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect } from 'react'

// replace new lines with br
function replaceNewLinesWithBr(text: string) {
    return text.split("\n").map((line: string, index: number) => (
        <React.Fragment key={index}>
            {line}
            {index !== text.split("\n").length - 1 && <br />}
        </React.Fragment>
    ));
}

export default function PostDetailsCmp({ postSSR }: { postSSR: PostData }) {
    const { data } = postSSR
    const { description, image, title, id } = data

    const NewTextComp = replaceNewLinesWithBr(description)

    return (
        <Container maxW={'6xl'}>
            <SimpleGrid
                columns={1}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            image
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {title}
                        </Heading>

                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text className='article' fontSize={'lg'} w={'100%'}>
                                {NewTextComp}
                            </Text>
                        </VStack>
                        <Link href={`/edit?id=${id}`}><Button >Edit Post</Button></Link>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}