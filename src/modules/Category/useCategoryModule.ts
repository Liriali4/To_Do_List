import { useState } from 'react';
import { CategoryType } from '../../types/allTypes';
import { ItemModuleContract } from '../../Contracts/conctract';
import { StorageEnum, saveData } from '../../DataBase/LocalStorageDao';

export function useCategoryModule(): ItemModuleContract<CategoryType> {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addItem = (category: CategoryType) => {
    setCategories([...categories, category]);
  };

  const editItem = (category: CategoryType) => {
    // Lógica para editar categoria
    // Pode envolver encontrar a categoria pelo nome ou posição e atualizá-la
  };


const deleteItem = (categoryToDelete: CategoryType, allCategoreis: CategoryType[]) => {
    
    const categoreisWithoutDeleted = allCategoreis.filter((c: CategoryType) => c.name !== categoryToDelete.name);
    saveData(StorageEnum.Category, categoreisWithoutDeleted);
    setCategories(categoreisWithoutDeleted);
};


  return {
    addItem,
    editItem,
    deleteItem,
  };
}
