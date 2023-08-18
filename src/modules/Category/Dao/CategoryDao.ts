import { StorageEnum, deleteData, editData, getData, saveData } from "../../../DataBase/LocalStorageDao";
import { CategoryType } from "../../../types/allTypes";

export function GetAllCategoriesDao() {
    return getData(StorageEnum.Category)
}

export function AddCategoryDao(updatedCategories: CategoryType[]){
    saveData(StorageEnum.Category, updatedCategories);
}

export function EditCategoryDao(category: CategoryType){
    editData(StorageEnum.Category, category.id, category)
}

export function DeleteCategoryDao(categoreisWithoutDeleted:  CategoryType[]){
    saveData(StorageEnum.Category, categoreisWithoutDeleted);
}

export function DeleteAllCategoriesDao(key: string){
    deleteData(key)
}
