import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, } from '@chakra-ui/react'
import { getData, saveData, StorageEnum } from '../../DataBase/LocalStorageDao';
import { TaskType } from '../../types/allTypes';
import { FiTrash } from 'react-icons/fi';

export default function TaskList() {

    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        const data = getData(StorageEnum.Task) || [];
        setTasks(data);
    }, []); // This empty array means the effect runs only once on mount


    function completeTask(task: TaskType) {
        console.log('ff')
        const updatedTasks = tasks.map((t: TaskType) =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
        );

        // Aqui você pode salvar o estado atualizado de tasks no localStorage se necessário
        saveData(StorageEnum.Task, updatedTasks);
        setTasks(updatedTasks);
    }

    function removetask(task: TaskType) {
        console.log("eliminado") 
        
        const tasksWithoutDeleted = tasks.filter((t: TaskType) => t.id !== task.id);
        saveData(StorageEnum.Task, tasksWithoutDeleted);
        setTasks(tasksWithoutDeleted);

        const existingTasks = getData(StorageEnum.CompletedTask) || [];
        const updatedTasks = [...existingTasks, task];
        saveData(StorageEnum.CompletedTask, updatedTasks);
    }

    return (

        <Box
            borderRadius={'10px'}
            boxShadow="2px 2px #ddd"
            bg={'branco.unico'}
            w={'750px'}
            h={'650px'}
            p={'20px'}
        >
            <Text
                fontSize={'24px'}
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
    );
}

