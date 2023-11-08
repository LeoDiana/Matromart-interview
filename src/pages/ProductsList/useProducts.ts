import {useQuery} from "react-query";
import Product from "../../types/Product";
import {products} from "../../api/products";

export default function useProducts() {
    const {data} = useQuery<Product[]>('products', products);

    return data
}