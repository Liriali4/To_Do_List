import create from 'zustand';
import { CategoryType, TaskType } from '../types/allTypes';

type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  setTasks: (task: TaskType[]) => void;
};

type CategoryStore = {
  categories: CategoryType[];
  setCategories: (categories: CategoryType[]) => void; 
  addCategory: (category: CategoryType) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
    setTasks: (tasks) =>
      set((state) => ({
        tasks,
      })),
}));

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  setCategories: (categories) =>
    set((state) => ({
      categories,
    })),
  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
}));


