import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import TaskList from './taskList';
import Form from "./FormOfTasks";

export default function Task() {

    return (
        <Flex
        h={'200px'}
    >
        <Box w={'50%'} pl={'50px'}> <TaskList /></Box>
        <Box w={'50%'} pl={'50px'}> <Form /></Box>
    </Flex>
    );
}

