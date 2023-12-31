import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Details from './Components/Details'
import Login from './Components/Login'
import Register from './Components/Register'


function App() {

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/details' element={ <Details />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
      </Routes>
    </Router>
  )
}

export default App
