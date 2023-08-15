import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import TaskInput from "../../Components/TaskInput";
import TaskButton from "../../Components/TaskButton";
import { useCategoryModule } from "./useCategoryModule";
import { CategoryType } from "../../types/allTypes";

export default function AddCategory(): JSX.Element {
    const [newCategory, setNewCategory] = useState({ name: '', position: '' });

    const categoryModule = useCategoryModule();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newCategory.name.trim() !== '' && newCategory.position.trim() !== '') {
            const CategoryToAdd: CategoryType = {
                id: Date.now(),
                name: newCategory.name,
                obs: newCategory.position
            };
            
            categoryModule.addItem(CategoryToAdd);
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
            p={'0 20px'}
            w='410px'
            h={'450px'}>
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
                label="Observação:"
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
