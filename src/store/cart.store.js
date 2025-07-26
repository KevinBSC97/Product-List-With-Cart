import { create } from "zustand";
import data from '../../data.json'

export const useCartStore = create((set, get) => ({
    isClose: true,
    cart: [],
    products: data,

    toggleClose: () => set( (state) => ({
        isClose: !state.isClose
    })),

    resetCart: () => set( () => ({
        cart: []
    })),

    addItemToCart: ( newItem ) => set( (state) => ({
        cart: [ ...state.cart, newItem ]
    })),

    updateItemInCart: ( updateItem ) => set( (state) => ({
        cart: state.cart.map( item => item.name === updateItem.name ? { ...updateItem } : item )
    })),

    deleteItemFromCart: ( name ) => set( (state) => ({
        cart: state.cart.filter( item => item.name !== name )
    })),

    totalCart: () => get().cart.reduce( ( acc, item ) => acc + ( item.quantity * item.price ), 0 )
}))