import create from 'zustand';
import { CategoryType, TaskType } from '../types/allTypes';
import getAllCategories from '../modules/Category/Repository/useCategoryModule';
import getAllTasks from '../modules/Task/Repository/useTaskModule';

type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  setTasks: (tasks: TaskType[]) => void;
  getAllTasks: () => void;
};

type CompletedTaskStore = {
  completedTasks: TaskType[];
  addCompletedTasks: (task: TaskType) => void;
  setCompletedTasks: (tasks: TaskType[]) => void;
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
      tasks: Array.isArray(state.tasks) ? [...state.tasks, task] : [task],
    })),

  setTasks: (tasks) =>
    set(() => ({
      tasks: Array.isArray(tasks) ? tasks : [],
    })),

  getAllTasks: () => {
    console.log("Buscando tarefas...");
    const fetchedTasks = getAllTasks();
    set(() => ({
      tasks: Array.isArray(fetchedTasks) ? fetchedTasks : [],
    }));
  },
}));

export const useCompletedTaskStore = create<CompletedTaskStore>((set) => ({
  completedTasks: [],

  addCompletedTasks: (completedTask) =>
    set((state) => ({
      completedTasks: Array.isArray(state.completedTasks)
        ? [...state.completedTasks, completedTask]
        : [completedTask],
    })),

  setCompletedTasks: (completedTasks) =>
    set(() => ({
      completedTasks: Array.isArray(completedTasks) ? completedTasks : [],
    })),
}));

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],

  setCategories: (categories) =>
    set(() => ({
      categories: Array.isArray(categories) ? categories : [],
    })),

  addCategory: (category) =>
    set((state) => ({
      categories: Array.isArray(state.categories)
        ? [...state.categories, category]
        : [category],
    })),

  getAllCategories: () => {
    console.log("Buscando categorias...");
    const fetchedCategories = getAllCategories();
    set(() => ({
      categories: Array.isArray(fetchedCategories) ? fetchedCategories : [],
    }));
  },
}));
