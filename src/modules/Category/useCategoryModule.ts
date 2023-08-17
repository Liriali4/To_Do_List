import { useState } from 'react';
import { CategoryType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, getData } from '../../DataBase/LocalStorageDao';
import { useCategoryStore } from '../../State/zustand';
import { AddCategoryDao, DeleteAllCategoriesDao, DeleteCategoryDao, EditCategoryDao } from './Dao/CategoryDao';

export function useCategoryModule(): ItemModuleContract<CategoryType> {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const setCategoriesState = useCategoryStore(state => state.setCategories);
    const categoriesState = useCategoryStore(state => state.addCategory);
    const allCategories = useCategoryStore(state => state.categories);

    const addItem = (CategoryToAdd: CategoryType) => {
        setCategories([...categories, CategoryToAdd]);

        const existingCategories = getData(StorageEnum.Category) || [];
        const updatedCategories = [...existingCategories, CategoryToAdd];
        AddCategoryDao(updatedCategories);

        categoriesState(CategoryToAdd)
    };

    const editItem = (category: CategoryType) => {
        EditCategoryDao(category)

        const updatedTasks = allCategories.map((t: CategoryType) => (t.id === category.id ? category : t));
        setCategoriesState(updatedTasks);
    };

    const deleteItem = (categoryToDelete: CategoryType, allCategoreis: CategoryType[]) => {
        const categoreisWithoutDeleted = allCategoreis.filter((c: CategoryType) => c.name !== categoryToDelete.name);

        DeleteCategoryDao(categoreisWithoutDeleted);

        setCategories(categoreisWithoutDeleted);
        setCategoriesState(categoreisWithoutDeleted);
    };


    const deleteAllItens = (key: string) => {
        DeleteAllCategoriesDao(key)
    }


    return {
        addItem,
        editItem,
        deleteItem,
        deleteAllItens,
    };
}
