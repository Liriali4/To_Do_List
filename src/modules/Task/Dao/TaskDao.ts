import { StorageEnum, deleteData, editData, saveData } from "../../../DataBase/LocalStorageDao";
import { TaskType } from "../../../types/allTypes";

export function AddTaskDao(updatedTasks: TaskType[]){
    saveData(StorageEnum.Task, updatedTasks);
}

export function EditTaskDao(Task: TaskType){
    editData(StorageEnum.Task, Task.id, Task)
}
export function DeleteTaskDao(categoreisWithoutDeleted:  TaskType[]){
    saveData(StorageEnum.Task, categoreisWithoutDeleted);
}

export function DeleteAllTasksDao(key: string){
    deleteData(key)
}

export function SaveDeletedTaskOnHistoric(categoreisWithoutDeleted:  TaskType[]){
    saveData(StorageEnum.CompletedTask, categoreisWithoutDeleted);
}

