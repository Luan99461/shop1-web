import { createContext } from "react"
import { useState } from "react"


export const CartContext = createContext();

export function ProvideCart({ children }) {
    const [cartItems, setCartItems] = useState([])
    // function removeCart(product) {
    //     setCartItems(cartItems.filter(cart => cart.id !== product.id))
    // }
    function removeCart(product) {
        const cartItem = cartItems.find(item => item.id === product.id);
        if (cartItem) {
            if (cartItem.quantity === 1) {
                setCartItems(cartItems.filter(cart => cart.id !== product.id));
            } else {
                setCartItems(cartItems.map(item => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                }));
            }
        }
    }

    function addToCart(product, quantity = 1) {

        const existCartItem = cartItems.find(item =>
            item.id === product.id
        )
        if (existCartItem) {
            const cartItem = cartItems.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
            setCartItems(cartItem)
        } else {
            setCartItems([...cartItems, { ...product, quantity: quantity }])
        }
    }
    console.log(cartItems)

    return (
        <CartContext.Provider value={{ addToCart, cartItems, removeCart }} >
            {children}
        </CartContext.Provider>
    )
}