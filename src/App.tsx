import React from 'react';
import './App.css';
import Home from "./page/Home";
import {RouterProvider} from "react-router-dom";
import router from "./route/route";

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
