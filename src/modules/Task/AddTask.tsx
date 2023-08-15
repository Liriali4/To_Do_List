import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import TaskInput from "../../Components/TaskInput";
import TaskButton from "../../Components/TaskButton";
import { useTaskModule } from "./useTaskModule";
import Select from 'react-select';
import { CategoryType, TaskType } from "../../types/allTypes";
import Sidebar from "../../Components/sideBar";
import { useCategoryStore } from "../../State/zustand";

export default function AddTask(): JSX.Element {
    const [newTask, setNewTask] = useState('');
    const [newCategory, setNewCategory] = useState({ label: '', value: '' });

    const taskModule = useTaskModule();

    const categories = useCategoryStore(state => state.categories);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newTask !== '' && newCategory !== null) {
            let category = newCategory.value
            const taskToAdd: TaskType = {
                id: Date.now(),
                name: newTask,
                category: category,
                completed: false,
            };
            
            taskModule.addItem(taskToAdd);

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

    const options = categories.map((name: CategoryType) => ({
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
                    w={'460px'}
                    h={'460px'}
                    bg={'branco.unico'}
                >
                    <Text
                        fontSize={'24px'}
                        fontWeight={'600'}
                        color={'roxo.escuro'}
                    >
                        Adicione uma nova Tarefa.</Text>
                    <TaskInput
                        label="O que você tem a fazer?"
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
                                outline: 'none',
                                background: 'cinza.input',
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
