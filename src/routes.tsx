import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/mainLayout'
import MainPage from './pages/MainPage/MainPage'
import ErrorPage404 from './pages/ErrorPage404/ErrorPage404'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <MainPage /> }],
    errorElement: <ErrorPage404 />,
  },
])

export default routes
