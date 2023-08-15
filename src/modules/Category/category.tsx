import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import AddCategory from "./AddCategory";
import CategoryOfTask from "./ListCategoryTask";
import Sidebar from '../../Components/sideBar';


export default function Category() {

    return (
        <Box
            w={'100%'}
            h={'100vh'}
            bg={'cinza.fundo'}

        >
            <Sidebar />
            <Flex
                ml={'20%'}
                h={'100vh'}
                justify={'center'}
                align={'center'}
            >
                <Box w={'50%'} pl={'50px'} pt={'40px'}> <AddCategory /></Box>
                <Box w={'50%'} pl={'50px'} pt={'40px'}> <CategoryOfTask /></Box>
            </Flex>
        </Box>
    );
}

