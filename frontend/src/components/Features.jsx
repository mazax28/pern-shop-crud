import { Truck, Shield, Headphones, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Envío Gratuito",
      description: "Envío gratis en pedidos superiores a $100. Entrega rápida y segura a todo el país."
    },
    {
      icon: Shield,
      title: "Garantía Extendida",
      description: "Todos nuestros productos incluyen garantía extendida de hasta 2 años."
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Nuestro equipo de expertos está disponible las 24 horas para ayudarte."
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Solo trabajamos con las marcas más reconocidas y productos de alta calidad."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir POS GRESTORE?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos comprometemos a ofrecerte la mejor experiencia de compra 
            con servicios excepcionales y productos de calidad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 group-hover:bg-emerald-500 transition-colors">
                <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
