import React from 'react';
import { ListItem, UnorderedList, } from '@chakra-ui/react'
import { StorageEnum, getData } from '../../DataBase/LocalStorageDao';

export default function TaskList() {
    const Tasks = getData(StorageEnum.Task) || [];

    return (
        <UnorderedList>
            {Tasks.map((task: any, index: any) => (
                <ListItem key={index}>{task.name}</ListItem>
            ))}
        </UnorderedList>
    );
}

