import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import TaskInput from "../../Components/TaskInput";
import TaskButton from "../../Components/TaskButton";
import { useTaskStore } from "../../State/zustand";
import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";
import Select from 'react-select';
import { Category } from "../../types/allTypes";
import Sidebar from "../../Components/sideBar";

type Task = {
    id: number;
    name: string;
    category: string;
    completed: boolean;
};

export default function AddTask(): JSX.Element {
    const [newTask, setNewTask] = useState('');
    const [newCategory, setNewCategory] = useState({ label: '', value: '' });
    const addTask = useTaskStore((state: { addTask: any; }) => state.addTask);


    const categories = getData(StorageEnum.Category) || [];

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newTask !== '' && newCategory !== null) {
            let category = newCategory.value
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
            setNewCategory({ label: '', value: '' });

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
        <Box
            w={'100%'}
            h={'100vh'}
            bg={'cinza.fundo'}

        >
            <Sidebar />
            <Flex
                ml={'15%'}
                h={'100vh'}
                flexDir={'column'}
                justify={'center'}
                align={'center'}
            >
                <Flex
                    flexDir={'column'}
                    justify={'space-around'}
                    borderRadius={'10px'}
                    boxShadow="2px 2px #ddd"
                    p={'15px'}
                    w={'360px'}
                    h={'360px'}
                    bg={'branco.unico'}
                >
                    <Text
                        fontSize={'24px'}
                        fontWeight={'600'}
                        color={'roxo.escuro'}
                    >
                        Adicione uma nova Tarefa.</Text>
                    <TaskInput
                        label="Task:"
                        onChange={handleTaskChange}
                        value={newTask}
                    />
                    <Text fontSize={'16px'}>Selecione a categoria:</Text>
                    <Select
                        placeholder={'Selecione a categoria'}
                        styles={{
                            control: (baseStyles, _) => ({
                                ...baseStyles,
                                border: '2px solid #FF0080',
                                height: 48,
                                fontSize: 14,
                                outline:'none',
                                background:'cinza.input',
                            }),
                        }}
                        value={newCategory}
                        options={options}
                        className='basic-single'
                        classNamePrefix='select'
                        onChange={(e) => handleCategoryChange(e)}

                    />
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignContent={"center"}
                        w={'100%'}
                    >
                        <TaskButton
                            label="Add Task"
                            onClick={handleSubmit}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}
