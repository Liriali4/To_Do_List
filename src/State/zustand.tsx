import create from 'zustand';
import { CategoryType, TaskType } from '../types/allTypes';
import { StorageEnum, getData } from '../DataBase/LocalStorageDao';

type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  setTasks: (task: TaskType[]) => void;
};

type CompletedTaskStore = {
  completedTasks: TaskType[];
  addCompletedTasks: (task: TaskType) => void;
  setCompletedTasks: (task: TaskType[]) => void;
};

type CategoryStore = {
  categories: CategoryType[];
  setCategories: (categories: CategoryType[]) => void;
  addCategory: (category: CategoryType) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: getData(StorageEnum.Task) || [],
  addTask: (task) =>
  set((state) => ({
    tasks: [...state.tasks, task],
  })),
  setTasks: (tasks) =>
  set((state) => ({
    tasks,
  })),
}));

export const useCompletedTaskStore = create<CompletedTaskStore>((set) => ({
  completedTasks: getData(StorageEnum.CompletedTask) || [],
  addCompletedTasks: (completedTask) =>
  set((state) => ({
    completedTasks: [...state.completedTasks, completedTask],
  })),
  setCompletedTasks: (completedTasks) =>
  set((state) => ({
    completedTasks,
  })),
}));

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: getData(StorageEnum.Category) || [],
  setCategories: (categories) =>
    set((state) => ({
      categories,
    })),
  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
}));
