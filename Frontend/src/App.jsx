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
import Gallery from './pages/Gallery'
import TestimonialsPage from './pages/Testimonial'
import AboutUsPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import ScrollToTop from './components/ScrollToTop'
import BlogDetail from './pages/BlogDetailPage'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog-detail/:slug' element={<BlogDetail/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/testimonials' element={<TestimonialsPage/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/projects' element={<ProjectPage/>}/>
      <Route path='/project/:slug' element={<ProjectDetail/>}/>
      <Route path='/services' element={<ServicePage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App