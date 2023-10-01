
import './App.css'
import Navbar from './layout/Navbar'
import AppRoutes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import Searchbar from './layout/Searchbar'
import 'flowbite';
import { Footer } from './layout/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Searchbar/>
        <AppRoutes />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
