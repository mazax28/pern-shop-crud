import {Plus, Minus} from 'lucide-react'
import { useCartProducts } from '../store/useCartProducts';

function CartItem({product}) {
    const {addToCart,removeFromCart} = useCartProducts()

    const handleAddCart = ()=>{
        addToCart(product)
    }
    const handleremove = ()=>{
        removeFromCart(product.id)
    }
  return (
    <div className='flex items-center gap-4 p-4 bg-white shadow-md rounded-lg mb-4'>
                    <img className='max-w-[100px] rounded-sm' src={product.image} alt="Product" />
                    <div className="flex flex-col items-start">
                        <h2 className="text-gray-700">{product.name}</h2>
                        <p className="font-bold text-gray-700">{product.price}</p>
                        <div className="flex  items-center gap-2 p-2 bg-gray-200 rounded-lg">
                            <button onClick={handleAddCart} className="btn btn-square border-none bg-emerald-500 btn-sm  cursor-pointer">
                                <Plus className="size-3" />
                            </button>
                            <span className='font-semibold text-gray-700 text-xl'>{product.quantity}</span>
                            <button onClick={handleremove} className="btn btn-square bg-emerald-500 btn-sm cursor-pointer border-none font-bold">
                                <Minus className="size-3" />
                            </button>
                        </div>

                    </div>
     </div>
  )
}

export default CartItem
