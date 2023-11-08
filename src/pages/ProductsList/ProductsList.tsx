import ProductCard from "./components/ProductCard";
import useProducts from "./useProducts";

function ProductsList() {
    const products = useProducts();

    return (
        <div className={'flex flex-wrap gap-2 justify-center'}>
            {products?.map((product) => (
                <ProductCard key={product.id} {...product}/>
            ))}
        </div>
    )
}

export default ProductsList;