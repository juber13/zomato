import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dinnig from './pages/Dining'
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurents' element={<Dinnig />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
