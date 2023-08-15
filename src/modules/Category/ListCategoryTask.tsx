import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { StorageEnum } from "../../DataBase/LocalStorageDao";
import { CategoryType } from "../../types/allTypes";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useCategoryModule } from "./useCategoryModule";
import { useCategoryStore } from "../../State/zustand";

export default function CategoryOfTask(): JSX.Element {

    const categoryModule = useCategoryModule();
    const categories = useCategoryStore(state => state.categories);
    

    function editCategory(task: CategoryType) {
        categoryModule.editItem(task)
    }

    function removecategory(category: CategoryType) {
        categoryModule.deleteItem(category, categories);
    }

    function removeAllCategory() {
        categoryModule.deleteAllItens(StorageEnum.Category)

    }

    return (
        <Box
            borderRadius={'10px'}
            boxShadow="2px 2px #ddd"
            bg={'branco.unico'}
            w={'410px'}
            h={'450px'}
            p={'10px 20px'}
        >
            <Flex p={'0 20px'} justify={'space-between'} align={'center'} w={'100%'}>
                <Text
                    fontSize={'24px'}
                    fontWeight={'600'}
                    color={'roxo.escuro'}
                    m={'10px 0'}
                >Categorias existentes:</Text>
                <FiTrash
                    size={25}
                    color="#7928CA"
                    onClick={() => removeAllCategory()}
                />
            </Flex>
            <Box >
                {categories.map((category: any, index: any) => (
                    <Flex
                        justify={'space-between'}
                        align={'center'}
                        p={'10px'}
                        borderBottom={'2px solid #FF0080'}
                        w={'100%'}
                    >
                        <Text key={index}>{category.name}</Text>
                        <Text key={index} fontStyle='italic'>{category.obs}</Text>

                        <Flex justify={'space-between'} w={'15%'}>
                            <FiEdit
                                size={15}
                                color="#7928CA"
                                onClick={() => editCategory(category)}
                            />
                            <FiTrash
                                size={15}
                                color="#7928CA"
                                onClick={() => removecategory(category)}
                            />
                        </Flex>
                    </Flex>
                ))}
            </Box>
        </Box>
    );
}
