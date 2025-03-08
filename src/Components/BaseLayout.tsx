import React from "react";
import { JSX, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./sideBar";

export default function BaseLayout(props: PropsWithChildren): JSX.Element {
    return (
        <Box
            w={'100%'}
            h={'100vh'}
            bg={'cinza.fundo'}
            overflow={'hidden'}>
            <Sidebar />
            <Box >
                {props.children}
            </Box>
        </Box>
    )
}