import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import TaskInput from "./Components/TaskInput";
import TaskButton from "./Components/TaskButton";
import { useTaskStore } from "../../State";
import { StorageEnum, getData, saveData } from "../../DataBase/LocalStorageDao";

type Task = {
    id: number;
    name: string;
    category: string;
    completed: boolean;
};

export default function FormOfTasks(): JSX.Element {
    const [newTask, setNewTask] = useState({ task: '', category: '' });
    const addTask = useTaskStore((state) => state.addTask);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newTask.task.trim() !== '' && newTask.category.trim() !== '') {
            const taskToAdd: Task = {
                id: Date.now(),
                name: newTask.task,
                category: newTask.category,
                completed: false,
            };
            addTask(taskToAdd);
            
            const existingTasks = getData(StorageEnum.Task) || [];
            const updatedTasks = [...existingTasks, taskToAdd];
            saveData(StorageEnum.Task, updatedTasks);
            console.log("New Task Object:", taskToAdd);
            setNewTask({ task: '', category: '' });
        }
    };

    const handleTaskChange = (value: string) => {
        setNewTask((prevTask) => ({ ...prevTask, task: value }));
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
                onChange={handleTaskChange}
                value={newTask.task}
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
