import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ChangeStateOfTask from './ChangeStateOfTask';


export default function Options() {

    return (
        <Flex
            h={'200px'}
        >
            <Box w={'50%'} pl={'50px'} pt={'40px'}>5</Box>
            <Box w={'50%'} pl={'50px'} pt={'40px'}><ChangeStateOfTask /></Box>
        </Flex>
    );
}

