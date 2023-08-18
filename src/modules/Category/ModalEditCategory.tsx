import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, Box, Flex } from "@chakra-ui/react";
import TaskButton from "../../Components/TaskButton";
import TaskInput from "../../Components/TaskInput";
import { CategoryType } from "../../types/allTypes";
import { useCategoryModule } from "./Repository/useCategoryModule";

interface ModalEditProps {
    isOpen: boolean;
    onClose: () => void;
    categoryToEdit: CategoryType;
}

export default function ModalEditCategory(props: ModalEditProps): JSX.Element {

    const {
        isOpen,
        onClose,
        categoryToEdit,
    } = props;

    const [editedCategory, setEditedCategory] = useState<CategoryType>({...categoryToEdit});
    
    const categoryModule = useCategoryModule();

    useEffect(() => {
        setEditedCategory({...categoryToEdit});
    }, [categoryToEdit]);

    const handleCategoryChange = (value: string) => {
        setEditedCategory({ ...editedCategory, name: value });
    };

    const handleObsChange = (value: string) => {
        setEditedCategory({ ...editedCategory, obs: value });
    };

    const handleSave = () => {
        categoryModule.editItem(editedCategory);
        onClose();
    };

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
                            label="Categoria"
                            onChange={handleCategoryChange}
                            value={editedCategory.name}
                        />
                        <TaskInput
                            label="Obs"
                            onChange={handleObsChange}
                            value={editedCategory.obs}
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
