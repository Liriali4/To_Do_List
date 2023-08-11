import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import AddCategory from "./AddCategory";
import CategoryOfTask from "./ListCategoryTask";


export default function Category() {

    return (
        <Flex
        h={'200px'}
    >
        <Box w={'50%'} pl={'50px'} pt={'40px'}> <CategoryOfTask /></Box>
        <Box w={'50%'} pl={'50px'} pt={'40px'}> <AddCategory /></Box>
    </Flex>
    );
}

