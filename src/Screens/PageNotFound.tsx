import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function PageNotFound(): JSX.Element {
    const navigation = useNavigate()
    function comeBack() {
        navigation('/')
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
                w={'400px'}
                h={'200px'}
                color={'branco.unico'}
            >

                <Text
                    fontSize={'100px'}
                    textAlign={'center'}
                >404!</Text>
                <Text
                    fontSize={'28px'}
                    textAlign={'center'}
                > Ops!
                </Text>
                <Text
                    fontSize={'28px'}>Este capítulo está sendo escrito.</Text>
                <Button
                    border={'2px solid #fff'}
                    borderRadius={'5px'}
                    color={'branco.unico'}
                    fontSize={'20px'}
                    fontWeight={'bold'}
                    w={'80px'}
                    h={'40px'}
                    mt={'25px'}
                    onClick={comeBack}
                >
                    Voltar
                </Button>
            </Flex>
        </Flex>
    )
}