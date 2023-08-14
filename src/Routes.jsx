import { Route, Routes } from 'react-router-dom'

//components
import Japanese from './Pages/Japanese'
import Protein from './Pages/Protein'
import Soup from './Pages/Soup'
import MainPage from './Pages/MainPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/protein' element={<Protein />} />
      <Route path='/soup' element={<Soup />} />
      <Route path='/japanese' element={<Japanese/>}/>
    </Routes>
  )
}

export default AppRoutes