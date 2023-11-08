type Size = 'XS' | 'S' | 'M' | 'L' | 'XL'
type Sizes = Size[]

export default interface Product {
    id: string
    name: string
    image: string
    price: number
    description: string
    sizes: Sizes
}