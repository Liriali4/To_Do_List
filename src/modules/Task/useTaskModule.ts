import { TaskType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { useCompletedTaskStore, useTaskStore } from '../../State/zustand';
import { AddTaskDao, DeleteAllTasksDao, DeleteTaskDao, EditTaskDao, SaveDeletedTaskOnHistoric } from './Dao/TaskDao';

export function useTaskModule(): ItemModuleContract<TaskType> {

  const setTasksState = useTaskStore(state => state.setTasks);
  const allTasks = useTaskStore(state => state.tasks);
  const allCompletedTasks = useCompletedTaskStore(state => state.completedTasks);
  const setAllCompletedTasks = useCompletedTaskStore(state => state.setCompletedTasks);

  const addItem = (taskToAdd: TaskType) => {
    const existingTasks = allTasks;
    const updatedTasks = [...existingTasks, taskToAdd];
    AddTaskDao(updatedTasks);
    setTasksState(updatedTasks);
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

    const updatedCompletedTasks = [...allCompletedTasks, task];
    SaveDeletedTaskOnHistoric(updatedCompletedTasks);
    setAllCompletedTasks(updatedCompletedTasks);
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
