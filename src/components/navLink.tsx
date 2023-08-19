import { Box, useColorModeValue } from "@chakra-ui/react"
import React from "react"

export default function NavLink(props: { children: React.ReactNode }) {
    const { children } = props
    console.log(children);


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