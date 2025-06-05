import { useCartProducts } from "../store/useCartProducts"

function CartDetail() {
    const {cartProducts} = useCartProducts()
    const total = cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="flex-col justify-items-start gap-4 p-4 bg-white shadow-md rounded-lg">
        <p className="font-semibold text-gray-700">{`Subtotal: $${total}`}</p>
        <button className="btn bg-emerald-500 text-gray-50 border-none flex-1">Checkout</button>
    </div>
  )
}

export default CartDetail
