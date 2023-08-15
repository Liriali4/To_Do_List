import React from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { CategoryType, TaskType } from "../types/allTypes";
import TaskButton from "./TaskButton";

interface ModalEditProps {
	isOpen: boolean;
	onClose: () => void,
    intemToEdit: TaskType,
}

export default function ModalEditTask(props: ModalEditProps): JSX.Element {

    const {
		isOpen,
		onClose,
        intemToEdit
	} = props;

    return (

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Qualquer coisa</Text>
                </ModalBody>

                <ModalFooter>
                    <TaskButton onClick={onClose} label={"Salvar"}/>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}