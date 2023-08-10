// No arquivo AddCategory.tsx
import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import TaskInput from "../Form/Components/TaskInput";
import TaskButton from "../Form/Components/TaskButton";
import { useCategoryStore } from "../../State";
import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";

type Category = {
    name: string;
    position: string;
};

export default function AddCategory(): JSX.Element {

    const [newCategory, setNewCategory] = useState<Category>({ name: '', position: '' });
    const addCategory = useCategoryStore((state) => state.addCategory);

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
        <>
            <Text>Adicione uma nova categoria.</Text>
            <TaskInput
                label="Category Name:"
                style={{ marginBottom: "10px" }}
                onChange={handleCategoryNameChange}
                value={newCategory.name}
            />
            <TaskInput
                label="Category position:"
                style={{ marginBottom: "10px" }}
                onChange={handleCategoryPositionChange}
                value={newCategory.position}
            />
            <TaskButton
                label="Add Category"
                onClick={handleSubmit}
            />
        </>
    )
}
