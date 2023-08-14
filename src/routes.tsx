import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Screens/home';
import { theme } from './Themes/themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Screens/login';
import PageNotFound from './Screens/PageNotFound';
import Category from './Screens/category';
import AddTask from './modules/Task/AddTask';
import Historic from './modules/Historic/historic';

export default function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/Home'} element={<Home />} />
          <Route path={'/addcategory'} element={<Category />} />
          <Route path={'/addtask'} element={<AddTask />} />
          <Route path={'/historicoftasks'} element={<Historic />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}


