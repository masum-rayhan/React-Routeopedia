import './App.css'

import Header from './components/header-component'
import About from './components/about-component'
import Home from './components/home-component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
