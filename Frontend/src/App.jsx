import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogPage from './pages/BlogPage'
import ContactUsPage from './pages/ContactUsPage'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App