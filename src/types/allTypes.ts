export type TaskType = {
  id: number;
  name: string;
  completed: boolean;
  category: string;
};

export type CategoryType = {
  id: number;
  name: string;
  obs: string;
};

export type UserType = {
  name: string;
}
