import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, useDisclosure, } from '@chakra-ui/react'
import { getData, saveData, StorageEnum } from '../../DataBase/LocalStorageDao';
import { TaskType } from '../../types/allTypes';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Sidebar from '../../Components/sideBar';
import { useTaskModule } from './useTaskModule';
import { useTaskStore } from '../../State/zustand';
import ModalEditTask from './ModalEditTask';

export default function TaskList() {

    const [selectedTask, setSelectedTask] = useState<TaskType>({id: 0, name: '', completed: false, category: '' });

    const taskModule = useTaskModule();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const setTasks = useTaskStore(state => state.setTasks);
    const tasks = useTaskStore(state => state.tasks);

    useEffect(() => {
        const tasks = getData(StorageEnum.Task) || [];
        setTasks(tasks);
    }, [setTasks]);

    function removetask(task: TaskType) {
        taskModule.deleteItem(task, tasks)
    }

    function completeTask(task: TaskType) {
        const updatedTasks = tasks.map((t: TaskType) =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
        );
        saveData(StorageEnum.Task, updatedTasks);
        setTasks(updatedTasks);
    }

    return (
        <>
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
                    <Box
                        borderRadius={'10px'}
                        boxShadow="2px 2px #ddd"
                        bg={'branco.unico'}
                        w={'750px'}
                        h={'650px'}
                        p={'20px'}
                    >
                        <Text
                            fontSize={'28px'}
                            fontWeight={'600'}
                            color={'roxo.escuro'}
                            m={'10px 0'}
                        >Lista de tarefas:</Text>
                        <Box
                            w={'100%'}
                        >
                            {tasks.map((task: TaskType, index: any) => (
                                <Flex
                                    borderBottom={'2px solid #FF0080'}
                                    w="100%"
                                    key={index}
                                >
                                    <Text
                                        p={'10px 20px'}
                                        key={index}
                                        style={{
                                            fontStyle: task.completed ? 'italic' : 'normal',
                                            color: task.completed ? '#555' : 'black',
                                        }}
                                    ># {index + 1}</Text>
                                    <Text
                                        w={'70%'}
                                        p={'10px 10px'}
                                        style={{
                                            fontStyle: task.completed ? 'italic' : 'normal',
                                            textDecoration: task.completed ? 'line-through' : 'none',
                                            color: task.completed ? '#555' : 'black',
                                        }}
                                    >{task.name}
                                    </Text>
                                    <Flex justify={'space-around'} w={'20%'} p={'10px 0'}>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => completeTask(task)}
                                            style={{
                                                width: "18px",
                                                height: "18px",
                                                borderRadius: "2px",
                                                border: "1px solid #7928CA",
                                                outline: "none",
                                                cursor: "pointer",
                                            }}
                                        />

                                        <FiEdit
                                            size={15}
                                            color="#7928CA"
                                            onClick={
                                                () => {
                                                    onOpen();
                                                    setSelectedTask(task);
                                                }}
                                        />
                                        <FiTrash
                                            size={15}
                                            color="#7928CA"
                                            onClick={() => removetask(task)}
                                        />
                                    </Flex>
                                </Flex>
                            ))}
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <ModalEditTask
                isOpen={isOpen}
                onClose={onClose}
                taskToEdit={selectedTask}
            />
        </>
    );
}

