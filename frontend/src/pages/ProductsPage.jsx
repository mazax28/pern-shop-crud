import ProductToolbar from "../components/ProductToolbar"
import AddProductModal from "../components/AddProductModal"
import ProductListContainer from "../components/ProductListContainer"
import DrawerCart from "../components/DrawerCart"
function ProductsPage() {
  return (
    <main className="mx-auto px-4 py-8 max-w-6xl mt-16">
      <ProductToolbar />
      <AddProductModal />
      <ProductListContainer/>
      <DrawerCart />


    </main>
  )
}

export default ProductsPage
