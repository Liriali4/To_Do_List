import { useState } from 'react';
import { CategoryType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, deleteData, editData, getData, saveData } from '../../DataBase/LocalStorageDao';
import { useCategoryStore } from '../../State/zustand';

export function useCategoryModule(): ItemModuleContract<CategoryType> {
    const [categories, setCategories] = useState<CategoryType[]>([]);

        const setCategoriesState = useCategoryStore(state => state.setCategories);
        const categoriesState = useCategoryStore(state => state.addCategory);

    const addItem = (CategoryToAdd: CategoryType) => {
        setCategories([...categories, CategoryToAdd]);

        const existingCategories = getData(StorageEnum.Category) || [];
        const updatedCategories = [...existingCategories, CategoryToAdd];
        saveData(StorageEnum.Category, updatedCategories);
        categoriesState(CategoryToAdd)
    };

    const editItem = (task: CategoryType) => {
        editData(StorageEnum.Category, task.id, task)
    };

    const deleteItem = (categoryToDelete: CategoryType, allCategoreis: CategoryType[]) => {
        const categoreisWithoutDeleted = allCategoreis.filter((c: CategoryType) => c.name !== categoryToDelete.name);
        saveData(StorageEnum.Category, categoreisWithoutDeleted);
        setCategories(categoreisWithoutDeleted);
        setCategoriesState(categoreisWithoutDeleted);
    };

    const deleteAllItens = (key: string) => {
        deleteData(key)
    }


    return {
        addItem,
        editItem,
        deleteItem,
        deleteAllItens,
    };
}
