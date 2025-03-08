import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FiPlusSquare, FiLogOut } from 'react-icons/fi'
import { TbHistoryToggle } from 'react-icons/tb'
import { TiUserDeleteOutline } from "react-icons/ti";
import { BiCategoryAlt } from 'react-icons/bi'
import { GoTasklist } from 'react-icons/go'
import { deleteAll, getData, StorageEnum } from "../DataBase/LocalStorageDao";
import { useCategoryStore, useCompletedTaskStore, useTaskStore } from "../State/zustand";


export default function Sidebar() {

    const history = useNavigate();
    const location = useLocation();
    const User = getData(StorageEnum.User)

    const setTasks = useTaskStore((state)=> state.setTasks)
    const setCompletedTasks = useCompletedTaskStore((state)=> state.setCompletedTasks)
    const setCategories = useCategoryStore((state)=> state.setCategories)

    function logout() {
        history("/");
    }

    function deleteUser() {
        deleteAll();
        setTasks([])
        setCompletedTasks([])
        setCategories([])
        logout();
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            boxShadow="1px 1px #ddd"
            position="fixed"
            bottom="0"
            bg={'branco.unico'}
            h="100%"
            w="15%"
        >
            <Flex
                display="flex"
                flexDirection="column"
                justify='space-around'
                align={'center'}
                h={'15%'}
                w={'100%'}
            >
                <Text
                    textAlign={'center'}
                    fontSize={'25px'}
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontWeight='bold'
                >{User.name}</Text>
            </Flex>
            <Flex
                display="flex"
                flexDirection="column"
                justify='space-between'
                h="40%"
            >
                <Link
                    to='/home'
                >
                    <Flex
                        display="flex"
                        align="center"
                        w="100%"
                        h="45px"
                        textDecoration="none"
                        color={location.pathname === "/home" ? " #FF0080" : "#FF0080"}
                        bg={location.pathname === "/home" ? "rgb(235, 235, 235)" : ""}
                        fontWeight={location.pathname === "/home" ? "700" : "500"}
                        fontSize="16px"
                        p="20px 20px 20px"
                        _hover={{
                            bg: "cinza.fundo",
                            fontWeight: "700"
                        }}
                    >
                        <GoTasklist
                            size={23} />
                        <Text
                            p="0 6px 0"
                        >Painel principal</Text>
                    </Flex>
                </Link>
                <Link
                    to='/addcategory'
                >
                    <Flex
                        display="flex"
                        align="center"
                        w="100%"
                        h="45px"
                        textDecoration="none"
                        color={location.pathname === "/addcategory" ? " #FF0080" : "#FF0080"}
                        bg={location.pathname === "/addcategory" ? "rgb(235, 235, 235)" : ""}
                        fontWeight={location.pathname === "/addcategory" ? "700" : "500"}
                        fontSize="16px"
                        p="20px 20px 20px"
                        _hover={{
                            bg: "cinza.fundo",
                            fontWeight: "700"
                        }}
                    >
                        <BiCategoryAlt
                            size={23} />
                        <Text
                            p="0 6px 0"
                        >Categorias</Text>
                    </Flex>
                </Link>

                <Link
                    to='/addtask'
                >
                    <Flex
                        display="flex"
                        align="center"
                        w="100%"
                        h="45px"
                        textDecoration="none"
                        color={location.pathname === "/addtask" ? " #FF0080" : "#FF0080"}
                        bg={location.pathname === "/addtask" ? "rgb(235, 235, 235)" : ""}
                        fontWeight={location.pathname === "/addtask" ? "700" : "500"}
                        fontSize="16px"
                        p="20px 20px 20px"
                        _hover={{
                            bg: "cinza.fundo",
                            fontWeight: "700"
                        }}
                    >
                        <FiPlusSquare
                            size={23}
                            color="cinza.sidebar"
                        />
                        <Text
                            p="0 10px 0"
                        >Add Tarefas</Text>
                    </Flex>
                </Link>
                <Link
                    to='/historicoftasks'
                >
                    <Flex
                        display="flex"
                        align="center"
                        w="100%"
                        h="45px"
                        textDecoration="none"
                        color={location.pathname === "/historicoftasks" ? " #FF0080" : "#FF0080"}
                        bg={location.pathname === "/historicoftasks" ? "rgb(235, 235, 235)" : ""}
                        fontWeight={location.pathname === "/historicoftasks" ? "700" : "500"}
                        fontSize="16px"
                        p="20px 20px 20px"
                        _hover={{
                            bg: "cinza.fundo",
                            fontWeight: "700"
                        }}
                    >
                        <TbHistoryToggle
                            size={23}
                            color="cinza.sidebar"
                        />
                        <Text
                            p="0 10px 0"
                        >Histórico</Text>
                    </Flex>
                </Link>
                <Button
                    onClick={() => logout()}
                >
                    <Flex
                        display="flex"
                        align="center"
                        w="100%"
                        h="45px"
                        textDecoration="none"
                        color="#FF0080"
                        fontWeight="500"
                        fontSize="16px"
                        p="20px 20px 20px"
                        _hover={{
                            bg: "cinza.fundo",
                            fontWeight: "700"
                        }}
                    >
                        <FiLogOut
                            size={23}
                            color="cinza.sidebar"
                        />
                        <Text
                            p="0 10px 0"
                        >Sair</Text>
                    </Flex>
                </Button>
                <Button
                    onClick={() => deleteUser()}
                >
                    <Flex
                        display="flex"
                        align="center"
                        w="100%"
                        h="45px"
                        textDecoration="none"
                        color="#FF0080"
                        fontWeight="500"
                        fontSize="16px"
                        p="20px 20px 20px"
                        _hover={{
                            bg: "cinza.fundo",
                            fontWeight: "700"
                        }}
                    >
                        <TiUserDeleteOutline
                            size={23}
                            color="cinza.sidebar"
                        />
                        <Text
                            p="0 10px 0"
                        >Apagar conta</Text>
                    </Flex>
                </Button>
            </Flex>
        </Box >
    );
}