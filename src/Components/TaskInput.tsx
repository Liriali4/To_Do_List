import { Box, Text, Input } from "@chakra-ui/react";
import React from "react";

type TaskInputProps = {
    label: string;
    style?: React.CSSProperties;
    value?: string;
    onChange?: (value: string) => void;
};

export default function TaskInput({ label, style, value, onChange }: TaskInputProps): JSX.Element {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <Box style={style}>
            <Text>{label}</Text>
            <Input
                onChange={handleChange}
                value={value}
            />
        </Box>
    );
}
