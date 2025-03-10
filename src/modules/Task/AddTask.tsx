import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import TaskInput from "../../Components/TaskInput";
import TaskButton from "../../Components/TaskButton";
import { useTaskModule } from "./Repository/useTaskModule";
import { TaskType } from "../../types/allTypes";
import TaskSelectCategories from "./Components/TaskSelectCategory";

export default function AddTask(): JSX.Element {
    const [newTask, setNewTask] = useState('');
    const [CategoryOfTask, setCategoryOfTask] = useState({ label: '', value: '' });

    const taskModule = useTaskModule();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newTask !== '' && CategoryOfTask !== null) {

            const taskToAdd: TaskType = {
                id: Date.now(),
                name: newTask,
                category: CategoryOfTask.value,
                completed: false,
            };

            taskModule.addItem(taskToAdd);

            setNewTask('');
            setCategoryOfTask({ label: '', value: '' });
        }
    };

    const handleTaskChange = (value: string) => {
        setNewTask(value);
    };

    const handleCategoryChange = (option: any) => {
        setCategoryOfTask(option);
    };

    return (
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
                <TaskSelectCategories
                    value={CategoryOfTask}
                    onChange={handleCategoryChange}
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
    )
}
