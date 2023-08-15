import { useState } from 'react';
import { TaskType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, deleteData, editData, getData, saveData } from '../../DataBase/LocalStorageDao';

export function useTaskModule(): ItemModuleContract<TaskType> {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addItem = (taskToAdd: TaskType) => {
    setTasks([...tasks, taskToAdd]);
    
    const existingTasks = getData(StorageEnum.Task) || [];
    const updatedTasks = [...existingTasks, taskToAdd];
    saveData(StorageEnum.Task, updatedTasks);
  };

  const editItem = (task: TaskType) => {
    editData(StorageEnum.Task, task.id, task)
  };

  const deleteItem = (task: TaskType, allTask: TaskType[]) => {
    const tasksWithoutDeleted = allTask.filter((t: TaskType) => t.id !== task.id);
    saveData(StorageEnum.Task, tasksWithoutDeleted);

    const existingTasks = getData(StorageEnum.CompletedTask) || [];
    const updatedTasks = [...existingTasks, task];
    saveData(StorageEnum.CompletedTask, updatedTasks);

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
