import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Components/sideBar";


export default function Home(): JSX.Element {
    return (
        <Box
            w={'100%'}
            h={'100vh'}
            bg={'branco.unico'}
        >
            <Sidebar />
            <Box ml={'15%'}>
                <Text>List of all Task</Text>
            </Box>
        </Box>
    )
}