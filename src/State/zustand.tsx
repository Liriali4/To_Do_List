import create from 'zustand';
import { CategoryType, TaskType } from '../types/allTypes';

type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  markTaskCompleted: (taskId: number) => void;
  removeTask: (taskId: number) => void;
};

type CategoryStore = {
  categories: CategoryType[];
  addCategory: (category: CategoryType) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  markTaskCompleted: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)),
    })),
  removeTask: (taskId) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
}));

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
}));


