'use client'

import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
} from '@chakra-ui/react'
import { ListHeader } from './listHeader'
import { footerDummyLinks } from '@/services/util.service'



export default function Footer() {
    // Dummy links
    const { group1, group2, group3, group4 } = footerDummyLinks

    return (
        <Box
            className='footer-wrapper'
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={10}
                className='links-wrapper'
            >
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Product</ListHeader>
                        <Box as="a" href={'#'}>
                            Overview
                        </Box>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Box as="a" href={'#'}>
                                Features
                            </Box>
                            <Tag
                                size={'sm'}
                                bg={useColorModeValue('green.300', 'green.800')}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag>
                        </Stack>
                        {group1.map(link => <Box key={link} as="a" href={'#'}>
                            {link}
                        </Box>)}

                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        {group2.map(link => <Box key={link} as="a" href={'#'}>
                            {link}
                        </Box>)}
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        {group3.map(link => <Box key={link} as="a" href={'#'}>
                            {link}
                        </Box>)}
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        {group4.map(link => <Box key={link} as="a" href={'#'}>
                            {link}
                        </Box>)}

                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}
                className='image-wrapper'>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Image src={'/logo2.svg'} width={50} height={50} />
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2023 DailyTechByes. All rights reserved
                </Text>
            </Box>
        </Box>
    )
}