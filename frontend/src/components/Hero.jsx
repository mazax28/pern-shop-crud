import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tecnología
                <span className="text-emerald-500 block">Premium</span>
                para tu vida
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubre nuestra colección cuidadosamente seleccionada de productos 
                electrónicos de alta calidad que transformarán tu experiencia digital.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2 text-lg font-medium">
                <span>Explorar Productos</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors flex items-center justify-center space-x-2 text-lg font-medium">
                <Play className="w-5 h-5" />
                <span>Ver Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Productos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50k+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🎧</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
