import { Outlet } from 'react-router-dom'
import './App.css'

import { Header } from './components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Header></Header>
      <Outlet />
      <footer></footer>
    </QueryClientProvider>
  )
}

export default App
