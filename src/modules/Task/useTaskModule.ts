import { useState } from 'react';
import { TaskType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, deleteData, editData, getData, saveData } from '../../DataBase/LocalStorageDao';
import { useTaskStore } from '../../State/zustand';

export function useTaskModule(): ItemModuleContract<TaskType> {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const setTasksState = useTaskStore(state => state.setTasks);

  const allTasks = useTaskStore(state => state.tasks);

  const addItem = (taskToAdd: TaskType) => {
    setTasks([...tasks, taskToAdd]);

    const existingTasks = getData(StorageEnum.Task) || [];
    const updatedTasks = [...existingTasks, taskToAdd];
    saveData(StorageEnum.Task, updatedTasks);
  };

  const editItem = (task: TaskType) => {
    const updatedTasks = allTasks.map((t: TaskType) => (t.id === task.id ? task : t));
    editData(StorageEnum.Task, task.id, task);
    setTasksState(updatedTasks);
  };

  const deleteItem = (task: TaskType, allTask: TaskType[]) => {
    const tasksWithoutDeleted = allTask.filter((t: TaskType) => t.id !== task.id);
    saveData(StorageEnum.Task, tasksWithoutDeleted);
    setTasksState(tasksWithoutDeleted)

    const existingCompletedTasks = getData(StorageEnum.CompletedTask) || [];
    const updatedCompletedTasks = [...existingCompletedTasks, task];
    saveData(StorageEnum.CompletedTask, updatedCompletedTasks);

  };

  const deleteAllItens = (key: string) => {
    deleteData(key)
  }

  return {
    addItem,
    editItem,
    deleteItem,
    deleteAllItens,
  };
}
