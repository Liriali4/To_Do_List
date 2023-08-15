import { useState } from 'react';
import { TaskType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, getData, saveData } from '../../DataBase/LocalStorageDao';

export function useTaskModule(): ItemModuleContract<TaskType> {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addItem = (task: TaskType) => {
    setTasks([...tasks, task]);
  };

  const editItem = (task: TaskType) => {
    // Lógica para editar tarefa
    // Pode envolver encontrar a tarefa pelo ID e atualizá-la
  };

  const deleteItem = (task: TaskType, allTask: TaskType[]) => {
    const tasksWithoutDeleted = allTask.filter((t: TaskType) => t.id !== task.id);
    saveData(StorageEnum.Task, tasksWithoutDeleted);

    const existingTasks = getData(StorageEnum.CompletedTask) || [];
    const updatedTasks = [...existingTasks, task];
    saveData(StorageEnum.CompletedTask, updatedTasks);
    
  };

  return {
    addItem,
    editItem,
    deleteItem,
  };
}
