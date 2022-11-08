import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "page/Home/Home";
import Layout from "component/Layout/Layout";
import CurrentPrice from "page/Current price/Current price"


export const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"currentPrice",
                element:<CurrentPrice/>
            }
            
        ]
    }
])

export default Router;