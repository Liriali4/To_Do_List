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
import BaseLayout from './Components/BaseLayout';
import TaskManagerRoutes from './routes/routes';

export default function App(): JSX.Element {

  const fetchCategories = useCategoryStore((state) => state.getAllCategories);
  const fetchTasks = useTaskStore((state) => state.getAllTasks);

  useEffect(() => {
    fetchCategories();
    fetchTasks()
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <TaskManagerRoutes/>
    </ChakraProvider>
  );
}


