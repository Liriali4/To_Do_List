import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function Login(): JSX.Element {

    const navigation = useNavigate()
    function login() {
        navigation('/home')

    }
    return (
        <Flex
            justify={'space-around'}
            align={'center'}
            w='100%'
            h='100vh'
            bgGradient='linear(to-r, #7928CA, #FF0080)'
        >
            <Flex
                flexDirection={'column'}
                justify={'space-around'}
                align={'center'}
                w={'345px'}
                h={'250px'}
                color={'branco.unico'}
            >
                <Text
                    fontSize={'30px'}
                    textAlign={'center'}
                >Olá, Líria Li4!</Text>
                <Text
                    fontSize={'22px'}
                    textAlign={'center'}
                > Não há nada melhor que começar o dia organizando as suas tarefas.</Text>
                <Button
                    border={'2px solid #fff'}
                    borderRadius={'5px'}
                    color={'branco.unico'}
                    fontSize={'20px'}
                    fontWeight={'bold'}
                    w={'80px'}
                    h={'40px'}
                    mt={'25px'}
                    onClick={login}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}