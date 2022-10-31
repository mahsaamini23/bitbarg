import {createBrowserRouter} from "react-router-dom";
import Home from "page/Home";
import Layout from "component/Layout/Layout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
        ]
    }
])

export default router;