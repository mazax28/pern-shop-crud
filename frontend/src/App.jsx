import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import ProductPage from "./pages/ProductPage"
import { useThemeStore } from "./store/useThemeStore"
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer"

function App() {

  const {theme} = useThemeStore()
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme} >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />

        </Routes>
        <Footer />
        <Toaster />
    </div>

    </BrowserRouter>
  )
}

export default App
