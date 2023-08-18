import create from 'zustand';
import { CategoryType, TaskType } from '../types/allTypes';
import getAllCategories from '../modules/Category/Repository/useCategoryModule';
import getAllTasks from '../modules/Task/Repository/useTaskModule';

type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  setTasks: (task: TaskType[]) => void;
  getAllTasks: () => void;
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
  getAllCategories: () => void;
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
    getAllTasks: () => {
      console.log("Veio buscar Tarefas");
      set({
        tasks: getAllTasks()
        
      });
    }
}));

export const useCompletedTaskStore = create<CompletedTaskStore>((set) => ({
  completedTasks: [],
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
  categories: [],
  setCategories: (categories) =>
  set((state) => ({
      categories,
    })),
  addCategory: (category) =>
  set((state) => ({
    categories: [...state.categories, category],
  })),
  getAllCategories: () => {
    console.log("Veio buscar categories");
    set({
      categories: getAllCategories()
      
    });
  }
}));
