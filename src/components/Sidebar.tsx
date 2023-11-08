import {useEffect, useState} from "react";
import {CartItem, getCart} from "../logic/cart";

function Sidebar() {
    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        function handleStorageChange () {
            setItems(getCart());
        }

        handleStorageChange();

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, []);

    function countTotal() {
        return items.reduce(((prev, item) => prev+item.quantity*item.price), 0)
    }

    return <div className='w-80 h-full shrink-0 relative'>
        <div className='fixed top-0 right-0 w-80 h-full bg-blue-400 p-4'>
            <p>Cart:</p>
            {items.length ? items.map(item => (
                <div key={item.id} className='flex gap-2'>
                    <p>{item.name}</p>
                    <p>{item.price}$</p>
                    <p>x{item.quantity}</p>
                    <p>= {item.price*item.quantity}$</p>
                </div>))
                : <div>Add something in cart</div>}
            {items.length && <p>Total: {countTotal()}$</p>}
        </div>
    </div>
}

export default Sidebar;