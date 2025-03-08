import { useState } from 'react';
import { CategoryType } from '../../../types/allTypes';
import { ItemModuleContract } from '../../../Contracts/conctract';
import { useCategoryStore } from '../../../State/zustand';
import { AddCategoryDao, DeleteAllCategoriesDao, DeleteCategoryDao, EditCategoryDao, GetAllCategoriesDao } from '../Dao/CategoryDao';

export function useCategoryModule(): ItemModuleContract<CategoryType> {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const setCategoriesState = useCategoryStore(state => state.setCategories);
    const categoriesState = useCategoryStore(state => state.addCategory);
    const allCategories = useCategoryStore(state => state.categories) || [];

    const addItem = (CategoryToAdd: CategoryType) => {
        setCategories([...categories, CategoryToAdd]);

        let updatedCategories

        const existingCategories = allCategories;
        existingCategories ?  updatedCategories = [...existingCategories, CategoryToAdd] :  updatedCategories = [...existingCategories, CategoryToAdd];
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


export default function getAllCategories() {
    return GetAllCategoriesDao();
}
