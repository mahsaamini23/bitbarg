import React from 'react';
import './App.css';
// import Home from "./page/Home";
import {RouterProvider} from "react-router-dom";
import router from "./route/route";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
