import { ProductCard } from "./product-card"
import { useCartStore } from '../store/cart.store'

export const CardsContainer = () => {

  const { products } = useCartStore();

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6 w-[327px] md:w-[688px]">
        {
          products.map( item => <ProductCard key={ item.name } { ...item } />)
        }
    </div>
  )
}
