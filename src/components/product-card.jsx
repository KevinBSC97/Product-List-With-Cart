//import { useState } from "react"
import { useCartStore } from '../store/cart.store'

export const ProductCard = ( { image, name, category, price } ) => {
  //const [quantity, setQuantity] = useState(0);
  const { addItemToCart, updateItemInCart, deleteItemFromCart, cart } = useCartStore();

  let quantity = 0
  const itemsInCart = cart.filter( item => item.name === name )

  if( itemsInCart.length > 0 ){
    quantity = itemsInCart[0].quantity
  }

  const addOne = () => {
    //setQuantity(quantity + 1)
    const newQuantity = quantity + 1;

    if( newQuantity > 1 ){
      updateItemInCart({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    } else {
      addItemToCart({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    }
  };

  const substractOne = () => {
    //setQuantity(quantity - 1)
    const newQuantity = quantity - 1;

    if( newQuantity === 0 ){
      deleteItemFromCart( name );
    } else {
      updateItemInCart({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    }
  };

  return (
    <div className="relative">
        <picture>
            <source media="(min-width: 768px)" srcSet={ image.tablet } />
            <source media="(min-width: 1440px)" srcSet={ image.desktop } />
            <img className="rounded-lg mb-[38px]" src={ image.mobile } alt="image-baklava-mobile" />
        </picture>
        { quantity === 0 ? (
            <button onClick={ addOne } className="bg-Rose-50 border-2 border-Rose-300 w-40 rounded-full flex justify-center gap-2 p-3 absolute inset-x-0 top-[190px] cursor-pointer mx-auto hover:border-Red transition-colors">
                <img src="/assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
                <span>Add to cart</span>
            </button>
        ) : (
            <button className="bg-Red w-40 rounded-full flex justify-between items-center gap-2 p-3 absolute inset-x-0 top-[190px] cursor-pointer mx-auto hover:border-Red transition-colors">
                <img onClick={ substractOne } className="border border-Rose-50 size-[18px] rounded-full p-1 hover:bg-Rose-50" src="/assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity" />
                <p className="text-Rose-50">{ quantity }</p>
                <img onClick={ addOne } className="border border-Rose-50 size-[18px] rounded-full p-1 hover:bg-Rose-50" src="/assets/images/icon-increment-quantity.svg" alt="icon-increment-quantity" />
            </button>
        ) }
        <p className="text-Rose-500 text-sm">{ category }</p>
        <h2 className="font-bold">{ name }</h2>
        <p className="text-Red font-semibold">${ price.toFixed(2) }</p>
    </div>
  )
}
