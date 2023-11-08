import Product from "../types/Product";

interface ApiProduct {
    id: string
    title: string
    thumbnail: string
    price: number
    description: string
}

function adapter(item: ApiProduct): Product {
    return {
        id: item.id,
        name: item.title,
        image: item.thumbnail,
        price: item.price,
        description: item.description,
        sizes: ['S', 'M', 'L']
    }
}

export async function products() {
    const res =  await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data);
    return data.products.map(adapter);
}

export async function getProduct(id: string) {
    const res =  await fetch(`https://dummyjson.com/products/${id}`);
    return adapter(await res.json());
}