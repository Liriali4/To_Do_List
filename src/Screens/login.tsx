import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../types/allTypes";
import TaskInput from "../Components/TaskInput";
import TaskButton from "../Components/TaskButton";
import { saveData, StorageEnum } from "../DataBase/LocalStorageDao";

export default function Login(): JSX.Element {
    const [user, setUser] = useState({ name: "" });
    const [userExist, setUserExist] = useState(false);

    const navigation = useNavigate();
    function login() {
        navigation("/home");
    }

    const handleUserNameChange = (value: string) => {
        setUser((prevUser) => ({ ...prevUser, name: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user.name.trim() !== "") {
            saveData(StorageEnum.User, user);
            setUserExist(true);
        }
    };

    return (
        <Flex justify="center" align="center" w="100%" h="100vh" bg="cinza.fundo">
            {!userExist ? (
                 <Flex
                 flexDir="column"
                 justify="space-around"
                 borderRadius="10px"
                 boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                 bg="branco.unico"
                 p="25px"
                 w="450px"
                 h="400px"
             >
                 <Text fontSize="26px" fontWeight="bold" color="roxo.escuro" textAlign="center" mb="10px" >
                     Bem-vindo ao Task Manager!
                 </Text>
                 <Text fontSize="16px" color="cinza.escuro" textAlign="center" mb="10px">
                     Organize suas tarefas de forma simples e eficiente. Para começar, informe seu nome abaixo:
                 </Text>
                 <TaskInput
                     label="Digite seu nome:"
                     onChange={handleUserNameChange}
                     value={user.name}
                 />
                 <Box display="flex" justifyContent="center" mt="15px">
                     <TaskButton label="Continuar" onClick={handleSubmit} />
                 </Box>
             </Flex>
            ) : (
                <Flex
                    flexDirection="column"
                    justify="space-around"
                    align="center"
                    bg="branco.unico"
                    borderRadius="10px"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                    p="25px"
                    w="400px"
                    h="auto"
                    textAlign="center"
                >
                    <Text fontSize="28px" fontWeight="bold" color="roxo.escuro">
                        Olá, {user.name}!
                    </Text>
                    <Text fontSize="20px" color="cinza.escuro">
                        Comece o dia organizando suas tarefas da melhor forma possível.
                    </Text>
                    <Button
                        border="2px solid #6B46C1"
                        borderRadius="5px"
                        color="roxo.escuro"
                        fontSize="18px"
                        fontWeight="bold"
                        w="120px"
                        h="45px"
                        mt="20px"
                        onClick={login}
                        _hover={{ bg: "roxo.escuro", color: "white" }}
                    >
                        Entrar
                    </Button>
                </Flex>
            )}
        </Flex>
    );
}
