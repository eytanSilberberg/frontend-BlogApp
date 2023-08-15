'use client'
import Link from 'next/link'
const buttons = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Posts',
        path: '/posts'
    },
    {
        name: 'Edit',
        path: '/edit'
    }
]

import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react'


interface Props {
    children: React.ReactNode
}

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function Simple() {
    const currentPath = usePathname()

    useEffect(() => {
        console.log(currentPath)
    }, [currentPath])
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box px={4} pt={2}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mb={1} className='header-wrapper'>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack
                        display={'flex'}
                        spacing={8}
                        alignItems={'center'}
                        className='header'
                    >
                        <Box
                            className='image-wrapper'
                            w={59}
                            flexGrow={1}>
                            <Image width={'100%'} height={'100%'} src={'/logo2.svg'} />
                        </Box>
                        <HStack className='nav-button' flexGrow={2} as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} justifyContent={'center'}>
                            {buttons.map((button, index) => {
                                return (
                                    <Link
                                        href={button.path}
                                        key={index}>
                                        <Button
                                            borderRadius={0}
                                            _hover={{ color: 'gray.400' }}
                                            _active={{}}
                                            h={75}
                                            w={75}
                                            bgColor={'unset'}
                                            borderTop={currentPath === button.path ? '2px solid white' : ''}
                                            borderBottom={currentPath === button.path ? '2px solid green' : ''}>
                                            {button.name}
                                        </Button>
                                    </Link>
                                )
                            })}
                        </HStack>
                        <Box flexGrow={1}></Box>
                    </HStack>
                    <Flex alignItems={'center'} className='menu'>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>

                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {buttons.map((link) => (
                                <Link key={link.path} href={link.path}><NavLink >{link.name}</NavLink></Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}