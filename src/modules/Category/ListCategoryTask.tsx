import React from "react";
import { Text, Box, UnorderedList, ListItem, VStack } from "@chakra-ui/react";
import { StorageEnum, getData } from "../../DataBase/LocalStorageDao";

export default function CategoryOfTask(): JSX.Element {

    const categories = getData(StorageEnum.Category) || [];

    return (
        <Box
            borderRadius={'10px'}
            boxShadow="2px 2px #ddd"
            bg={'branco.unico'}
            w={'360px'}
            h={'400px'}
            p={'10px'}
        >
            <Text
                fontSize={'24px'}
                fontWeight={'600'}
                color={'roxo.escuro'}
                m={'10px 0'}
            >Categorias existentes:</Text>
            <Box>
                {categories.map((category: any, index: any) => (
                    <Text 
                    p={'10px 20px'} 
                    borderBottom={'2px solid #FF0080'}
                    key={index}>{category.name}</Text>
                ))}
            </Box>
        </Box>
    );
}
