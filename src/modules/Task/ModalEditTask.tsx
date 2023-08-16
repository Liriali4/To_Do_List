/* import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Input } from "@chakra-ui/react";
import { CategoryType, TaskType } from "../types/allTypes";
import { Box } from "@chakra-ui/react";
import Select from 'react-select';

interface ModalEditProps {
    isOpen: boolean;
    onClose: () => void;
    itemToEdit: TaskType | CategoryType; // Aceita TaskType ou CategoryType
}

export default function ModalEdit(props: ModalEditProps): JSX.Element {

    const {
        isOpen,
        onClose,
        itemToEdit,
    } = props;

    const [newTask, setNewTask] = useState('');
    const [newCategory, setNewCategory] = useState({ label: '', value: '' });

    const taskModule = useTaskModule();

    const categories = useCategoryStore(state => state.categories);
    
    const setCategories = useCategoryStore(state => state.setCategories);

    useEffect(() => {
        const categories = getData(StorageEnum.Category) || [];
        setCategories(categories)
    }, [setCategories]);



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
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                bg='#fff'
                borderRadius='5px'
                w={'500px'}
                h={'500px'}
            >
                <ModalHeader>Editar</ModalHeader>
                <ModalCloseButton />
                <ModalBody flexDir={'column'}
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
                </ModalBody>

                <ModalFooter>
                    <TaskButton onClick={onClose} label={"Salvar"} />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
 */