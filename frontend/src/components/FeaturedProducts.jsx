import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/apiProducts";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  // Obtener productos desde la API
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ page: 1, limit: 10 }), // Ajusta el límite según sea necesario
  });

  // Seleccionar los primeros tres productos
  const featuredProducts = products?.slice(0, 3) || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loading loading-spinner loading-xl text-emerald-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error al cargar productos destacados.</div>;
  }

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
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-500 hover:text-white transition-colors text-lg font-medium"
          >
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
