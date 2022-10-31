import React from 'react';
import './App.css';
import Home from "./page/Home";
import {BrowserRouter} from "react-router-dom";
import router from "./route/route";

function App() {
  return (
    <BrowserRouter  router={router}>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
