import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "./login"
import Register from "./register"
import Mapboard from "./MyMap"
import Intro from "./components/pages/hero"
  // ========================================
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro></Intro>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
      path: "/mymap",
      element: <Mapboard></Mapboard>
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
