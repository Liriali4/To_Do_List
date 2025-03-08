import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "../Screens/PageNotFound";
import BaseLayout from "../Components/BaseLayout";
import Login from "../Screens/login";
import TaskList from "../modules/Task/taskList";
import Category from "../modules/Category/category";
import AddTask from "../modules/Task/AddTask";
import Historic from "../modules/Task/Historic/historic";


export default function TaskManagerRoutes() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                    <Login />
            )
            ,
            errorElement: (<PageNotFound />),
        },
        {
            path: '/home',
            element: (
                <BaseLayout >
                    <TaskList />
                </BaseLayout>
            )
            ,
            errorElement: (<PageNotFound />),
        },
        {
            path: '/addcategory',
            element: (
                <BaseLayout >
                    <Category />
                </BaseLayout>
            )
            ,
            errorElement: (<PageNotFound />),
        },
        {
            path: '/addtask',
            element: (
                <BaseLayout >
                    <AddTask />
                </BaseLayout>
            )
            ,
            errorElement: (<PageNotFound />),
        },
        {
            path: '/historicoftasks',
            element: (
                <BaseLayout >
                    <Historic />
                </BaseLayout>
            )
            ,
            errorElement: (<PageNotFound />),
        },
    ]);


    return <RouterProvider router={router} />;
}
