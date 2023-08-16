import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Box, Flex } from "@chakra-ui/react";
import TaskButton from "../../Components/TaskButton";
import TaskInput from "../../Components/TaskInput";
import TaskSelectCategories from "./components/TaskSelectCategory";
import { TaskType } from "../../types/allTypes";
import { useTaskModule } from "./useTaskModule";

interface ModalEditProps {
    isOpen: boolean;
    onClose: () => void;
    taskToEdit: TaskType;
}

export default function ModalEditTask(props: ModalEditProps): JSX.Element {

    const {
        isOpen,
        onClose,
        taskToEdit,
    } = props;

    const [editedTask, setEditedTask] = useState<TaskType>({...taskToEdit});
    
    const taskModule = useTaskModule();

    useEffect(() => {
        setEditedTask({...taskToEdit});
    }, [taskToEdit]);

    const handleTaskChange = (value: string) => {
        setEditedTask({ ...editedTask, name: value });
    };

    const handleCategoryChange = (option: any) => {
        setEditedTask({ ...editedTask, category: option.value });
    };

    const handleSave = () => {
        taskModule.editItem(editedTask);
        onClose();
    };
    console.log(taskToEdit, editedTask)

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg="rgba(0, 0, 0, 0.5)" />
            <ModalContent
                bg={'branco.unico'}
                borderRadius='5px'
                w={'460px'}
                h={'440px'}
                m={'auto'}
            >
                <ModalHeader p={'15px'} w={'100%'} display={'flex'} flexDir={'row'} justifyContent={'space-between'}>
                    <Text fontSize={'24px'} fontWeight={'600'} color={'roxo.escuro'}>
                        Editar Tarefa
                    </Text>
                <ModalCloseButton />
                </ModalHeader>
                <ModalBody
                    h={'100%'}
                >
                    <Flex
                        w={'100%'}
                        h={'100%'}
                        flexDir={'column'}
                        justify={'space-around'}
                        p={'15px'}
                    >
                        <TaskInput
                            label="Nome da tarefa"
                            onChange={handleTaskChange}
                            value={editedTask.name}
                        />
                        <TaskSelectCategories
                            value={editedTask.category}
                            placeholder={editedTask.category}
                            onChange={handleCategoryChange}
                        />
                        <Box display={'flex'} justifyContent={'center'} alignContent={"center"} w={'100%'}>
                            <TaskButton label="Salvar alterações" onClick={handleSave} />
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
