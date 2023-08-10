import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import TaskInput from "../Form/Components/TaskInput";
import TaskButton from "../Form/Components/TaskButton";
import { useCategoryStore } from "../../State";


export default function AddCategory(): JSX.Element {

    const [newCategory, setNewCategory] = useState('');
    const addCategory = useCategoryStore((state) => state.addCategory);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newCategory.trim() !== '') {
            addCategory(newCategory);
            setNewCategory('');
        }
    };

    const handleTaskChange = (value: string) => {
        setNewCategory(value);
    };

    return (
        <>
            <Text>Adicione uma nova categoria.</Text>
            <TaskInput
                label="Task:"
                style={{ marginBottom: "10px" }}
                onChange={handleTaskChange}
                value={newCategory}
            />
            <TaskButton
                label="Add Task"
                onClick={handleSubmit}
            />
        </>
    )
}


