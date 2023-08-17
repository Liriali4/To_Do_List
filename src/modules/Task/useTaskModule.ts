import { useState } from 'react';
import { TaskType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, getData } from '../../DataBase/LocalStorageDao';
import { useTaskStore } from '../../State/zustand';
import { AddTaskDao, DeleteAllTasksDao, DeleteTaskDao, EditTaskDao, SaveDeletedTaskOnHistoric } from './Dao/TaskDao';

export function useTaskModule(): ItemModuleContract<TaskType> {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const setTasksState = useTaskStore(state => state.setTasks);

  const allTasks = useTaskStore(state => state.tasks);

  const addItem = (taskToAdd: TaskType) => {
    setTasks([...tasks, taskToAdd]);

    const existingTasks = getData(StorageEnum.Task) || [];
    const updatedTasks = [...existingTasks, taskToAdd];
    AddTaskDao(updatedTasks);
    
  };

  const editItem = (task: TaskType) => {
    const updatedTasks = allTasks.map((t: TaskType) => (t.id === task.id ? task : t));
    EditTaskDao(task);
    setTasksState(updatedTasks);
  };

  const deleteItem = (task: TaskType, allTask: TaskType[]) => {
    const tasksWithoutDeleted = allTask.filter((t: TaskType) => t.id !== task.id);
    DeleteTaskDao(tasksWithoutDeleted);
    setTasksState(tasksWithoutDeleted)

    const existingCompletedTasks = getData(StorageEnum.CompletedTask) || [];
    const updatedCompletedTasks = [...existingCompletedTasks, task];
    SaveDeletedTaskOnHistoric( updatedCompletedTasks);

  };

  const deleteAllItens = (key: string) => {
    DeleteAllTasksDao(key)
  }

  return {
    addItem,
    editItem,
    deleteItem,
    deleteAllItens,
  };
}
