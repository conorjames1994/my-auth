import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { HomePage } from './pages/homePage.jsx'
import { LoginPage } from './pages/loginPage.jsx'
import { SecretPage } from './pages/secretPage.jsx'
import { RegisterPage } from './pages/registerPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "loginPage",
        element: <LoginPage/>
    },
    {
        path: "loginPage/secretPage",
        element: <SecretPage/>
    },
    {
        path: "registerPage",
        element: <RegisterPage/>
    }
])

createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
