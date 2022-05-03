
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { GlobalStyles } from "./styles/GlobalStyles"

import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"

import { About } from './pages/About'
import { Contact } from './Pages/Contact'
import { Proyects } from './Pages/Proyects'
import { NotFound } from './Pages/NotFound'
import { Home } from './Pages/Home'

export const App = () => {
  return(
    <>
      <GlobalStyles />
        <BrowserRouter>
          <Header />         
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/proyects' element={<Proyects />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          <NavBar />
        </BrowserRouter>       
    </>
  )
}