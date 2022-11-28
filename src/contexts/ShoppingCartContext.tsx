import ShoppingCart from "../components/ShoppingCart"

const  { createContext, useContext, useState } = require("react")

const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}: any) => {
    const [cartItems, setCartItems] = useState ([])

    const cartQuantity:number | null = cartItems.reduce((quantity:number, item: { quantity: number }) => item.quantity + quantity, 0)

    const getItemQuantity = (articleNumber: number, item: any) => {
        return cartItems.find(item.articleNumber === articleNumber)?.quantity || 0
    }



    const incrementQuantity = (cartItem: any) => {
        const  {articleNumber, product} = cartItem

        setCartItems ((items: any[]) => {
            if   (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, {articleNumber, product, quantity: 1}]
            }else{
                return items.map(item => {
                    if (item.articleNumber === articleNumber){
                        return { ...item, quantity: item.quantity + 1}
                    }   else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: any) => {
        const  {articleNumber} = cartItem

        setCartItems ((items: any[]) => {
            if   (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            }else{
                return items.map(item => {
                    if (item.articleNumber === articleNumber){
                        return { ...item, quantity: item.quantity - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    
    const removeItem = (cartItem: any) => {
        const  {articleNumber} = cartItem
        setCartItems((items: any[]) => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart cartItems={[]} />
    </ShoppingCartContext.Provider>
}