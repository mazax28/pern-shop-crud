import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 298.99,
      originalPrice: 349.99,
      image: "🎧",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 249.99,
      originalPrice: 299.99,
      image: "⌚",
      rating: 4.9,
      reviews: 89,
      badge: "Nuevo"
    },
    {
      id: 3,
      name: "4K Ultra HD Camera",
      price: 899.99,
      originalPrice: 1099.99,
      image: "📷",
      rating: 4.7,
      reviews: 156,
      badge: "Oferta"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestra selección de productos más populares, elegidos por su calidad 
            excepcional y las mejores reseñas de nuestros clientes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square flex items-center justify-center">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-emerald-600">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <button className="w-full cursor-pointer bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Agregar al Carrito</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/products" className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-500 hover:text-white transition-colors text-lg font-medium">
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
