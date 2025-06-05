import { ShoppingCart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">POS GRESTORE</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu tienda de confianza para productos electrónicos premium. 
              Calidad, innovación y servicio excepcional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Productos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Auriculares</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Smartwatches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Cámaras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Accesorios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Gaming</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-400">info@posgrestore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-400">123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 POS GRESTORE. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
