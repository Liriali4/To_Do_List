import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Task from "../modules/Task/task";
import Category from "../modules/Category/category";
import Options from "../modules/options/options";


export default function Home(): JSX.Element {
    return (
        <Box>
            <Text>Task</Text>
            <Task />
            <Category />
            <Options/>
        </Box>
    )
}