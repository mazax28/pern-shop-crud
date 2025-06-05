import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import ProductPage from "./pages/ProductPage"
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer"
import ProductsPage from "./pages/ProductsPage"

function App() {

  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-50 transition-colors duration-300" >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />


          <Route path="/product/:id" element={<ProductPage />} />

        </Routes>
        <Footer />
        <Toaster />
    </div>

    </BrowserRouter>
  )
}

export default App
