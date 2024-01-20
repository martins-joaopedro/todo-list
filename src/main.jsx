import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home/'
import { AddTask } from './pages/AddTask/'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add",
    element: <AddTask />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />  
    </QueryClientProvider>
  </React.StrictMode>,
)
