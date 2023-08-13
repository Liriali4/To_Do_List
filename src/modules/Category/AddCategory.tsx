import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import TaskInput from "../../Components/TaskInput";
import TaskButton from "../../Components/TaskButton";
import { useCategoryStore } from "../../State/zustand";
import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";
import { CategoryType } from "../../types/allTypes";


export default function AddCategory(): JSX.Element {

    const [newCategory, setNewCategory] = useState<CategoryType>({ name: '', position: '' });
    const addCategory = useCategoryStore((state: { addCategory: any; }) => state.addCategory);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newCategory.name.trim() !== '' && newCategory.position.trim() !== '') {
            addCategory(newCategory);
            const existingCategories = getData(StorageEnum.Category) || [];
            const updatedCategories = [...existingCategories, newCategory];
            saveData(StorageEnum.Category, updatedCategories);
            setNewCategory({ name: '', position: '' });
        }
    };

    const handleCategoryNameChange = (value: string) => {
        setNewCategory((prevCategory) => ({ ...prevCategory, name: value }));
    };
    const handleCategoryPositionChange = (value: string) => {
        setNewCategory((prevCategory) => ({ ...prevCategory, position: value }));
    };

    return (
        <Flex
            flexDir={'column'}
            justify={'space-around'}
            borderRadius={'10px'}
            boxShadow="2px 2px #ddd"
            bg={'branco.unico'}
            p={'0 10px'}
            w='365px'
            h={'360px'}>
            <Text
                fontSize={'24px'}
                fontWeight={'600'}
                color={'roxo.escuro'}
            >
                Adicione uma nova categoria.</Text>
            <TaskInput
                label="Nome:"
                onChange={handleCategoryNameChange}
                value={newCategory.name}
            />
            <TaskInput
                label="Posição:"
                onChange={handleCategoryPositionChange}
                value={newCategory.position}
            />
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignContent={"center"}
                w={'100%'}
            >
            <TaskButton
                label="Add Category"
                onClick={handleSubmit}
            />
            </Box>
        </Flex >
    )
}
