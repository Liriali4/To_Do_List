import React from 'react';
import { Box, Checkbox, Flex, Text, } from '@chakra-ui/react'
import { getData, StorageEnum } from '../../DataBase/LocalStorageDao';
import Input from 'react-select/dist/declarations/src/components/Input';
import { TaskType } from '../../types/allTypes';
import { FiTrash } from 'react-icons/fi';

export default function TaskList() {
    const Tasks = getData(StorageEnum.Task) || [];

    function completTask(task: TaskType) {
        console.log("mmm")
       /*  task.completed= !task.completed */
    }
    function removetask(task: TaskType) {
        console.log("eliminado")
    }


    return (

        <Box
            borderRadius={'10px'}
            boxShadow="2px 2px #ddd"
            bg={'branco.unico'}
            w={'500px'}
            h={'550px'}
            p={'10px'}
        >
            <Text
                fontSize={'24px'}
                fontWeight={'600'}
                color={'roxo.escuro'}
                m={'10px 0'}
            >Lista de tarefas:</Text>
            <Box>
                {Tasks.map((task: TaskType, index: any) => (
                    <Flex
                        borderBottom={'2px solid #FF0080'}
                        display="flex"
                        justify="space-between"
                        w="60%"
                    >
                        <Text
                            p={'10px 20px'}
                            key={index}>{task.name}
                        </Text>
                        <input
                            type="checkbox"
                            checked={task.completed === true ? true : false}
                            onClick={() => completTask(task)}
                            style={{
                                appearance: "none",
                                width: "18px",
                                height: "18px",
                                backgroundColor: task.completed ? "#7928CA" : "gray",
                                borderRadius: "2px",
                                border: "1px solid #7928CA",
                                outline: "none",
                                cursor: "pointer",
                            }}
                        />
                        <FiTrash
                            size={15}
                            color="roxo.escuro"
                            onClick={() => removetask(task)}
                        />
                    </Flex>
                ))}
            </Box>
        </Box>
    );
}

