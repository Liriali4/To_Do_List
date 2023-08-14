import React, { useEffect, useState } from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";
import { CategoryType } from "../../types/allTypes";
import { FiTrash } from "react-icons/fi";

export default function CategoryOfTask(): JSX.Element {

    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        const data = getData(StorageEnum.Category) || [];
        setCategories(data);
    }, []);

    function removecategory(category: CategoryType) {
        console.log("eliminado")

        const categoreisWithoutDeleted = categories.filter((c: CategoryType) => c.name !== category.name);
        saveData(StorageEnum.Category, categoreisWithoutDeleted);
        setCategories(categoreisWithoutDeleted);

    }

    return (
        <Box
            borderRadius={'10px'}
            boxShadow="2px 2px #ddd"
            bg={'branco.unico'}
            w={'360px'}
            h={'400px'}
            p={'10px 20px'}
        >
            <Text
                fontSize={'24px'}
                fontWeight={'600'}
                color={'roxo.escuro'}
                m={'10px 0'}
            >Categorias existentes:</Text>
            <Box >
                {categories.map((category: any, index: any) => (
                    <Flex
                        justify={'space-between'}
                        align={'center'}
                            p={'10px'}
                        borderBottom={'2px solid #FF0080'}
                        w={'100%'}
                    >
                        <Text
                            key={index}>{category.name}</Text>

                        <FiTrash
                            size={15}
                            color="#7928CA"
                            onClick={() => removecategory(category)}
                        />
                    </Flex>
                ))}
            </Box>
        </Box>
    );
}
