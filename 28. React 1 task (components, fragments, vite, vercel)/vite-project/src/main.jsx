import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import AboutUs from './components/AboutUs.jsx'
import Contacts from './components/Contacts.jsx'
import Slider from './components/Slider.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <App />
    <AboutUs />
    <Contacts />
    <Slider />
    <Footer/>
  </>,
)
