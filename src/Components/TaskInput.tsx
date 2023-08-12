import { Flex, Text, Input } from "@chakra-ui/react";
import React from "react";

type TaskInputProps = {
    label: string;
    /*     style?: React.CSSProperties; */
    value?: string;
    onChange?: (value: string) => void;
};

export default function TaskInput({ label,/*  style, */ value, onChange }: TaskInputProps): JSX.Element {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <Flex
            /* style={style} */
            h={'90px'}
            w={'100%'}
            flexDir={'column'}
            justify={'space-around'}
        >
            <Text fontSize={'16px'}>{label}</Text>
            <Input
                bg={'cinza.input'}
                h={'45px'}
                w={'100%'}
                p={'10px'}
                outline={'none'}
                borderRadius={'5px'}
                border={'2px solid #FF0080'}
                onChange={handleChange}
                value={value}
            />
        </Flex>
    );
}
