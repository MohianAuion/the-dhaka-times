import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Pages/Loading/Loading';
import { RouterProvider } from 'react-router';
import router from "../Routes/Router";

const AppRouter = () => {

    const{loading}=use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
return <RouterProvider router={router}></RouterProvider>
};

export default AppRouter;