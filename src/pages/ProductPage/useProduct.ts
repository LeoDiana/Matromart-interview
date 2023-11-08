import {useQuery} from "react-query";
import Product from "../../types/Product";
import {getProduct} from "../../api/products";

export default function useProduct(id?: string) {
    const {data} = useQuery<Product>(['product', id], () => getProduct(id as string));

    return data
}