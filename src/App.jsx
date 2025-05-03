import './App.css'
import Nav from './Components/Navbar/Nav'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Service from './Pages/Services/Service'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Portfolio' element={<Portfolio/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
