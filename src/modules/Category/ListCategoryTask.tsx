import React from "react";
import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

export default function CategoryOfTask(): JSX.Element {
    const categories = [
        "Personal",
        "Work",
        "Study",
        "Home",
        "Shopping",
        // ... outras categorias
    ]

    return (
        <Box>
            <Text>Categories</Text>
            <UnorderedList>
                {categories.map((category, index) => (
                    <ListItem key={index}>{category}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}
