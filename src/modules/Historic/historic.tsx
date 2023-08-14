import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, } from '@chakra-ui/react'
import { deleteData, getData, StorageEnum } from '../../DataBase/LocalStorageDao';
import { TaskType } from '../../types/allTypes';
import { FiTrash } from 'react-icons/fi';
import Sidebar from '../../Components/sideBar';

export default function Historic() {

    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        const data = getData(StorageEnum.CompletedTask) || [];
        if (data.length > 0) {
            setTasks(data);
        }
    }, []);

    console.log(tasks)

    function removetask() {
        console.log("Histórico eliminado")
        deleteData(StorageEnum.CompletedTask)
        setTasks([])
    }

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
                <Box
                    borderRadius={'10px'}
                    boxShadow="2px 2px #ddd"
                    bg={'branco.unico'}
                    w={'750px'}
                    h={'650px'}
                    p={'20px'}
                >
                    <Flex p={'0 20px'} justify={'space-between'} align={'center'} w={'100%'}>
                        <Text
                            fontSize={'28px'}
                            fontWeight={'600'}
                            color={'roxo.escuro'}
                            m={'10px 0'}
                        >Histórico:</Text>
                        <FiTrash
                            size={25}
                            color="#7928CA"
                            onClick={() => removetask()}
                        />
                    </Flex>
                    <Box
                        w={'100%'}
                    >
                        {Array.isArray(tasks) && tasks.length > 0 ? (
                            tasks.map((task: TaskType, index: any) => (
                                <Flex
                                    borderBottom={'2px solid #FF0080'}
                                    w="100%"
                                    key={index}
                                >
                                    <Text
                                        w={'70%'}
                                        p={'10px 10px'}
                                        style={{
                                            fontStyle: task.completed ? 'italic' : 'normal',
                                            textDecoration: task.completed ? 'line-through' : 'none',
                                            color: task.completed ? '#555' : 'black',
                                        }}
                                    >
                                        {task.name}
                                    </Text>
                                </Flex>
                            ))
                        ) : (
                            <Text>Nenhum histórico disponível.</Text>
                        )}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );

}

