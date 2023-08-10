// TaskList.js
import React from 'react';
import { ListItem, UnorderedList,} from '@chakra-ui/react'
import { useTaskStore } from '../../State';

export default function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <UnorderedList>
      {tasks.map((task, index) => (
        <ListItem key={index}>{task.text}</ListItem>
      ))}
    </UnorderedList>
  );
}

