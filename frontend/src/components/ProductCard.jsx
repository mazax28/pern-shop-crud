import { Link } from 'react-router-dom'
import { Trash2Icon, EditIcon, ShoppingCart } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProduct } from '../api/apiProducts'
import { useCartProducts } from '../store/useCartProducts'


const ProductCard = ({ product }) => {
      const {addToCart} = useCartProducts()
    const client = true
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['products'] })
        },
      })

    const handleAddToCart = () => {
      console.log(product)
      addToCart(product)
    }
    

    const handleDelete = () => {
        mutation.mutate(product.id)
    }
  return(
      <div
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Product Image */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
               
              </div>

                    {/* Product Info */}
                    <div className="p-6">


                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </h3>

                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-emerald-600">
                          ${product.price}
                        </span>
  
                      </div>

                      <button onClick={handleAddToCart} className="w-full bg-emerald-500 text-white py-3 rounded-xl cursor-pointer hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2 group">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Agregar al Carrito</span>
                      </button>
                    </div>
      </div>

  )
}

export default ProductCard

