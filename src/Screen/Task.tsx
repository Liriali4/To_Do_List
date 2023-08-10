import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Form from "../modules/Form/FormOfTasks";
import TaskList from "../modules/List/taskList";
import AddCategory from "../modules/Category/AddCategory";
import CategoryOfTask from "../modules/Category/ListCategoryTask";


export default function Task(): JSX.Element {
    return (
        <Box>
            <Text>Task</Text>
            <TaskList />
            <Form />
            <AddCategory />
            <CategoryOfTask />
        </Box>
    )
}