import React from "react";
import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { StorageEnum, getData } from "../../DataBase/LocalStorageDao";

export default function CategoryOfTask(): JSX.Element {

    const categories = getData(StorageEnum.Category) || [];

    return (
        <Box>
            <Text>Categories:</Text>
            <UnorderedList>
                {categories.map((category: any, index: any) => (
                    <ListItem key={index}>{category.name}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}
