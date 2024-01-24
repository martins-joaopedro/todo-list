import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home/'
import { TaskPage } from './pages/TaskPage/index.jsx'



const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/todo/:id",
    element: <TaskPage />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />  
    </QueryClientProvider>
  </React.StrictMode>,
)
