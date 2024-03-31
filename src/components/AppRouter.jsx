import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Accommodation from '../pages/Accommodation'
import Header from './Header'

const AppRouter = () => {
  return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path='/logement' element={<Accommodation />} />
        </Routes>
    </Router>
  )
}

export default AppRouter;