import './App.css'
import Nav from './Components/Navbar/Nav'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Sidebar/>
      <Routes>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
