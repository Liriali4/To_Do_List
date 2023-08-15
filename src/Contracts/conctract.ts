//funções compartilhadas

export interface ItemModuleContract<T> {
    addItem: (item: T) => void;
    editItem: (item: T) => void;
    deleteItem: (item: T, allitem: T[]) => void;
  }
  