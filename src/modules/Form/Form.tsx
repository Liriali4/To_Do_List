import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import TaskInput from "./Components/TaskInput";
import TaskButton from "./Components/TaskButton";
import { useTaskStore } from "../../State";

type Task = {
    id: number;
    name: string;
    category: string;
    completed: boolean;
};

export default function Form(): JSX.Element {
    const [newTask, setNewTask] = useState({ taskText: '', category: '' });
    const addTask = useTaskStore((state) => state.addTask);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newTask.taskText.trim() !== '' && newTask.category.trim() !== '') {
            const taskToAdd: Task = {
                id: Date.now(),
                name: newTask.taskText,
                category: newTask.category,
                completed: false,
            };
            addTask(taskToAdd);
            setNewTask({ taskText: '', category: '' });
            console.log("New Task Object:", taskToAdd);
        }
    };

    const handleTaskTextChange = (value: string) => {
        setNewTask((prevTask) => ({ ...prevTask, taskText: value }));
    };

    const handleCategoryChange = (value: string) => {
        setNewTask((prevTask) => ({ ...prevTask, category: value }));
    };

    return (
        <>
            <Text>FORM</Text>
            <TaskInput
                label="Task:"
                style={{ marginBottom: "10px" }}
                onChange={handleTaskTextChange}
                value={newTask.taskText}
            />
            <TaskInput
                label="Category:"
                style={{ marginBottom: "10px" }}
                onChange={handleCategoryChange}
                value={newTask.category}
            />
            <TaskButton
                label="Add Task"
                onClick={handleSubmit}
            />
        </>
    )
}
