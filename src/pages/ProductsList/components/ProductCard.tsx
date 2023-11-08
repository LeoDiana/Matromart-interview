import Product from "../../../types/Product";
import {useNavigate} from "react-router-dom";

type ProductCardProps = Product
function ProductCard({name, image, price, id}: ProductCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className='w-80 relative border-2 border-gray-600 rounded-xl overflow-hidden shadow-md'
            onClick={() => navigate(`/products/${id}`)}
        >
            <img alt={name || 'product image'} src={image} className='object-cover h-60 w-80'/>
            <div className='flex justify-between m-2'>
                <p>{name}</p>
                <p>{price}$</p>
            </div>
        </div>

    )

}

export default ProductCard;