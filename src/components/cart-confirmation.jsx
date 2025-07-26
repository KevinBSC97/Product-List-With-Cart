import { useCartStore } from "../store/cart.store"
import { CartButton } from "./cart-button"
import { CartConfirmItem } from "./cart-confirm-item"
import { CartTotal } from "./cart-total"

export const CartConfirmation = () => {
    const { isClose, toggleClose, cart, resetCart } = useCartStore();

    const handleNewOrder = () => {
        toggleClose();
        resetCart();
    }

    return (
        <dialog hidden={ isClose } className="bg-black/50 w-full fixed h-screen grid place-content-center">
            <div className="w-[375px] md:w-[600px] max-h-[90vh] overflow-y-auto py-10 px-6 bg-white rounded-xl">
                <img src="/assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" />
                <h2 className="text-[2.5rem] font-bold">Order Confirmed</h2>
                <p className="text-Rose-500 mb-6">We hope you enjoy your food!</p>

                <div className="bg-Rose-50">
                    {
                        cart.map( item => <CartConfirmItem key={ item.name } { ...item } />)
                    }
                    <CartTotal />
                </div>
                <CartButton onClick={ handleNewOrder } text="Start New Order" />
            </div>
        </dialog>
    )
}
