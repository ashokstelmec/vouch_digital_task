import React from 'react';
import VClient from "./Components/VClient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaymentSetupForm from './Components/PaymentSetupForm';
import Theme from './Components/Theme';
import CreateProfileForm from './Components/CreateProfileForm';
import Login from './Components/Login';
import Modules from './Components/Modules';
import SuccessFull from './Components/SuccessFull';

const AppRoute = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        },
        {
            path : "/vClient",
            element : <VClient />
        },
        {
            path : "/addClient",
            element: <CreateProfileForm />
        },
        {
            path : "/payment",
            element: <PaymentSetupForm />
        },
        {
            path : "/themeForm",
            element: <Theme />
        },
        {
            path : "/moduleForm",
            element: <Modules />
        },
        {
            path : "/successfull",
            element: <SuccessFull />
        }


    ]); 
  return (
    <div>
        <RouterProvider router={router} />   
             
    </div>
  )
}

export default AppRoute