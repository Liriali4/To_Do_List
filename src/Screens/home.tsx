import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../Components/sideBar";
import TaskList from "../modules/Task/taskList";


export default function Home(): JSX.Element {
    return (
        <Box
            w={'100%'}
            h={'100vh'}
            bg={'cinza.fundo'}
        >
            <Sidebar />
            <Flex
                ml={'15%'}
                h={'100vh'}
                flexDir={'column'}
                justify={'center'}
                align={'center'}
            >
                <TaskList />
            </Flex>

        </Box>
    )
}