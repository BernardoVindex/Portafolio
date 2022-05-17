
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyles } from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import { light, dark } from './constants/uiThemes'

import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"

import { About } from './pages/About'
import { Contact } from './Pages/Contact'
import { Proyects } from './Pages/Proyects'
import { NotFound } from './Pages/NotFound'
import { Home } from './Pages/Home'
import { Container } from './styles/CommonComponents'

export const App = () => {
  const theme = { colors: dark}

  return(
    <>
      <GlobalStyles />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header className='header'/>
              <Container className='content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
                <Route path='proyects' element={<Proyects />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              </Container>
            <NavBar className='Navbar'/>
          </BrowserRouter>
        </ThemeProvider>
    </>
  )
}