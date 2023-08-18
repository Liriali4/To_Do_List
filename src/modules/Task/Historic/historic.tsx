import React from 'react';
import { Box, Flex, Text, } from '@chakra-ui/react'
import { StorageEnum } from '../../../DataBase/LocalStorageDao';
import { TaskType } from '../../../types/allTypes';
import { FiTrash } from 'react-icons/fi';
import Sidebar from '../../../Components/sideBar';
import { useCompletedTaskStore } from '../../../State/zustand';
import { useTaskModule } from '../Repository/useTaskModule';

export default function Historic() {

    const allCompletedTasks = useCompletedTaskStore(state => state.completedTasks);
    const setAllCompletedTasks = useCompletedTaskStore(state => state.setCompletedTasks);
    const taskModule = useTaskModule();

    function removeAllTask() {
        taskModule.deleteAllItens(StorageEnum.CompletedTask)
        setAllCompletedTasks([])
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
                            onClick={() => removeAllTask()}
                        />
                    </Flex>
                    <Box
                        w={'100%'}
                    >
                        {allCompletedTasks.length > 0 ? (
                            allCompletedTasks.map((task: TaskType, index: any) => (
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

