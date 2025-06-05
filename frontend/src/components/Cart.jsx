import { useState } from "react";
import { ShoppingBagIcon } from 'lucide-react';
import DrawerCart from "./DrawerCart"; // Importamos el componente DrawerCart
import { useCartProducts } from "../store/useCartProducts";

function Cart() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Estado para controlar el Drawer
  const {cartProducts} = useCartProducts()
  const totalQuantity = cartProducts.reduce((sum, product) => sum + product.quantity, 0);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState); // Alternar el estado del Drawer
  };

  return (
    <>
        <div onClick={toggleDrawer} className="indicator cursor-pointer drawer-button">
          <div className="p-2 rounded-full  border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
            <ShoppingBagIcon   className="size-5 " />
            <span className="badge badge-sm bg-emerald-500 text-white indicator-item">
              {totalQuantity}
            </span>
          </div>
        </div>
      <DrawerCart isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} /> {/* Pasamos el estado y la función */}
    </>
  );
}

export default Cart;
