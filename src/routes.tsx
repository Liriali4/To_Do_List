import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './Themes/themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Screens/login';
import PageNotFound from './Screens/PageNotFound';
import Category from './modules/Category/category';
import AddTask from './modules/Task/AddTask';
import Historic from './modules/Task/Historic/historic';
import { useCategoryStore, useTaskStore } from './State/zustand';
import TaskList from './modules/Task/taskList';

export default function App(): JSX.Element {

  const fetchCategories = useCategoryStore((state) => state.getAllCategories);
  const fetchTasks = useTaskStore((state) => state.getAllTasks);

  useEffect(() => {
    fetchCategories();
    fetchTasks()
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/home'} element={<TaskList />} />
          <Route path={'/addcategory'} element={<Category />} />
          <Route path={'/addtask'} element={<AddTask />} />
          <Route path={'/historicoftasks'} element={<Historic />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}


