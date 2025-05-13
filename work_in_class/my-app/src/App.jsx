import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import LoginButton from './components/loginButton'
import Profile from './pages/Profile'
import { Header } from './components/header'
import Dashboard from './pages/Dashboard'
import DashboardStats from './pages/DashboardStats'
import DashboardSettings from './pages/DashboardSettings'
import PrivateRoute from './components/privateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LoginButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="stats" element={<DashboardStats />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
        <Route path="/user/:buildingUuid/:id" element={<Profile />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
