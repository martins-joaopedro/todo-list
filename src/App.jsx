import { Outlet } from 'react-router-dom'
import './App.css'
 
import { Header } from './components/Header'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet />
      <footer></footer>
    </>
  )
}

export default App
