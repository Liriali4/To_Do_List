import { useState } from 'react';
import { CategoryType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, deleteData, editData, getData, saveData } from '../../DataBase/LocalStorageDao';
import { useCategoryStore } from '../../State/zustand';

export function useCategoryModule(): ItemModuleContract<CategoryType> {
    const [categories, setCategories] = useState<CategoryType[]>([]);

        const setCategoriesState = useCategoryStore(state => state.setCategories);
        const categoriesState = useCategoryStore(state => state.addCategory);
        const allCategories = useCategoryStore(state => state.categories);

    const addItem = (CategoryToAdd: CategoryType) => {
        setCategories([...categories, CategoryToAdd]);

        const existingCategories = getData(StorageEnum.Category) || [];
        const updatedCategories = [...existingCategories, CategoryToAdd];
        saveData(StorageEnum.Category, updatedCategories);
        categoriesState(CategoryToAdd)
    };

    const editItem = (category: CategoryType) => {
        const updatedTasks = allCategories.map((t: CategoryType) => (t.id === category.id ? category : t));
        editData(StorageEnum.Category, category.id, category)
        setCategoriesState(updatedTasks);
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
