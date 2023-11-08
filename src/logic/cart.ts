export interface CartItem {
    id: string,
    name: string,
    quantity: number,
    price: number,
}

export function getCart(): CartItem[] {
    try{
        return JSON.parse(localStorage.getItem('cart') || '')
    } catch (error) {
        return []
    }
}

export function addProduct({id, name, price}: Partial<CartItem>) {
    const items = getCart();
    const itemInCart = items?.find(item => item.id === id) || {id, name, quantity: 0, price};
    const updatedCart = [...items?.filter(item => item.id !== id), {...itemInCart,  quantity: itemInCart.quantity+1}];
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new Event('storage'))
}