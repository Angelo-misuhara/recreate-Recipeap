
import './App.css'
import Navbar from './layout/Navbar'
import AppRoutes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './layout/Searchbar'
import 'flowbite';

function App() {


  return (
    <>
      <Navbar />
      <Searchbar/>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
