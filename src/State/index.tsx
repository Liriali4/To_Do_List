import create from 'zustand';

type Task = {
  id: number;
  text: string;
  completed: boolean;
  category: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (taskText: string, category: string) => void;
  markTaskCompleted: (taskId: number) => void;
  removeTask: (taskId: number) => void;
};

type CategoryStore = {
  categories: string[];
  addCategory: (category: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (taskText, category) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: taskText, completed: false, category }],
    })),
  markTaskCompleted: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)),
    })),
  removeTask: (taskId) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
}));



export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  addCategory: (category) => set((state) => ({ categories: [...state.categories, category] })),
}));
