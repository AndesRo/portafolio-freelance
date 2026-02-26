// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './hooks/useTheme'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import ScrollButton from './components/UI/ScrollButton'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Puedes agregar más rutas aquí si es necesario */}
              </Routes>
            </main>
            <Footer />
            <ScrollButton />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
