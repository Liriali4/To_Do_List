//funções compartilhadas

export interface ItemModuleContract<T> {
    addItem: (item: T) => void;
    editItem: (item: T) => void;
    deleteItem: (item: T, allitens: T[]) => void;
    deleteAllItens: (key: string) => void;
  }
  