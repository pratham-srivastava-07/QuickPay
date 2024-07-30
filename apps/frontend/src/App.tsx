
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Hero from './pages/Hero'

function App() {
  

  return (
   <div className='app-background'>
   <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path="/signup" index element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney />} />
   </Routes>
   </div>
  )
}

export default App
