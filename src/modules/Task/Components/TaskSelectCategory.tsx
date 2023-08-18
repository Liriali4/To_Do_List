import React from "react";
import { CategoryType } from "../../../types/allTypes";
import { Flex, Text } from "@chakra-ui/react";
import Select from 'react-select';
import { useCategoryStore } from "../../../State/zustand";

interface SelectProps {
    value: any;
    placeholder?: string;
    onChange: (value: any) => void;
}

export default function TaskSelectCategories(props: SelectProps): JSX.Element {
    const {  value, placeholder, onChange } = props;
    
    const categories = useCategoryStore(state => state.categories);    

    const options = categories.map((name: CategoryType) => ({
        value: name.name,
        label: name.name
    }));    
    

    return (
        <Flex flexDir={'column'}>
            <Text mb={'15px'} fontSize={'16px'}>Selecione a categoria:</Text>
            <Select
                placeholder={placeholder}
                styles={{
                    control: (baseStyles, _) => ({
                        ...baseStyles,
                        border: '2px solid #FF0080',
                        height: 48,
                        fontSize: 14,
                        outline: 'none',
                        background: 'cinza.input',
                    }),
                }}
                value={value}
                options={options}
                className='basic-single'
                classNamePrefix='select'
                onChange={onChange}
            />
        </Flex>
    )
}

