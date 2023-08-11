import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import TaskInput from "../../Components/TaskInput";
import TaskButton from "../../Components/TaskButton";
import { useTaskStore } from "../../State/zustand";
import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";
import Select from 'react-select';
import { Category } from "../../types/allTypes";

type Task = {
    id: number;
    name: string;
    category: string;
    completed: boolean;
};

export default function FormOfTasks(): JSX.Element {
    const [newTask, setNewTask] = useState('');
    const [newCategory, setNewCategory] = useState({label:'', value:''});
    const addTask = useTaskStore((state) => state.addTask);


    const categories = getData(StorageEnum.Category) || [];

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newTask !== '' && newCategory !== null) {
            let category= newCategory.value
            const taskToAdd: Task = {
                id: Date.now(),
                name: newTask,
                category: category,
                completed: false,
            };
            addTask(taskToAdd);

            const existingTasks = getData(StorageEnum.Task) || [];
            const updatedTasks = [...existingTasks, taskToAdd];
            saveData(StorageEnum.Task, updatedTasks);
            console.log("New Task Object:", taskToAdd);
            setNewTask('');
            setNewCategory({label:'', value:''});

        }
    };

    const handleTaskChange = (value: string) => {
        setNewTask(value);
    };

    const handleCategoryChange = (option: any) => {
        setNewCategory(option);
    };

    const options = categories.map((name: Category) => ({
        value: name.name,
        label: name.name
    }));

    return (
        <>
            <Text>FORM</Text>
            <TaskInput
                label="Task:"
                style={{ marginBottom: "10px" }}
                onChange={handleTaskChange}
                value={newTask}
            />
            <Select
                placeholder={'Selecione a categoria'}
                styles={{
                    control: (baseStyles, _) => ({
                        ...baseStyles,
                        borderColor: '#ddd',
                        height: 48,
                        fontSize: 14,
                    }),
                }}
                value={newCategory}
                options={options}
                className='basic-single'
                classNamePrefix='select'
                onChange={(e) => handleCategoryChange(e)}

            />
            <TaskButton
                label="Add Task"
                onClick={handleSubmit}
            />
        </>
    )
}
