import {useParams} from "react-router-dom";
import useProduct from "./useProduct";
import {addProduct} from "../../logic/cart";
import Product from "../../types/Product";

function ProductPage() {
    const {productId: id} = useParams();

    const product = useProduct(id);

    if(!product) {
        <div>Loading...</div>
    }

    return (
        <div>
            <img src={product?.image} alt={product?.name || 'product image'}/>
            <p>{product?.name}</p>
            <p>Price: {product?.price}$</p>
            <p>Description: {product?.description}</p>
            <div className='flex gap-2'>Sizes: {product?.sizes.map((size) => <p key={size}>{size}</p>)}</div>
            <button
                onClick={() => addProduct(product as Product)}
                className='bg-blue-400 p-4 rounded-lg border-blue-800 border-2'
            >
                Add to cart
            </button>
        </div>

    )
}

export default ProductPage;