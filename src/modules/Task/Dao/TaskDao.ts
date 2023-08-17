import { StorageEnum, deleteData, editData, getData, saveData } from "../../../DataBase/LocalStorageDao";
import { TaskType } from "../../../types/allTypes";

export function GetAllTasksDao() {
    return getData(StorageEnum.Task)
}
/* 
return new Promise((resolve, reject) => {
    const q = getAllDocumentWithQuery(COLLECTION_CATEGORIES, [where('restaurantId', '==', restaurantId)])

    getDocs(q)
        .then(snapshot => {
            if (snapshot.empty) {
                resolve([])
            } else {
                const categoriesBucket: CategoryType[] = []

                snapshot.forEach(docs => {
                    const data = docs.data() as CategoryType
                    categoriesBucket.push({ ...data, id: docs.id })
                })
                resolve(categoriesBucket)
            }
        })
        .catch(reject)
})
*/

export function AddTaskDao(updatedTasks: TaskType[]) {
    saveData(StorageEnum.Task, updatedTasks);
}

export function EditTaskDao(Task: TaskType) {
    editData(StorageEnum.Task, Task.id, Task)
}
export function DeleteTaskDao(categoreisWithoutDeleted: TaskType[]) {
    saveData(StorageEnum.Task, categoreisWithoutDeleted);
}

export function DeleteAllTasksDao(key: string) {
    deleteData(key)
}

export function SaveDeletedTaskOnHistoric(categoreisWithoutDeleted: TaskType[]) {
    saveData(StorageEnum.CompletedTask, categoreisWithoutDeleted);
}

