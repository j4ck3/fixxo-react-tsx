import { useContext, createContext, useState} from 'react'
import { ProductItem } from '../models/ProductModels';

interface Props {
    children: any;
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    productsByCategory: ProductItem[]
    productsByRating: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void;
    getProductsByCategory: (category?: string) => void;
    getProductsByRating: (rating?: number) => void;
    getProductByTag: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

export const ProductProvider: React.FC<Props> = ({children}) => {
    const EMPTY_PRODUCT_ITEM: ProductItem = {articleNumber: '', tag: '', name: '', category: '', description: '', price: 0, imageName: '', item: null}
    const baseUrl:string = 'http://localhost:5000/api/products'
    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT_ITEM)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [productsByCategory, setProductsByCategory] = useState<ProductItem[]>([])
    const [productsByRating, setProductsByRating] = useState<ProductItem[]>([])

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined){
            const res = await fetch(`${baseUrl}/product/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getProductByTag = async (take = 0) => {
        let url = `${baseUrl}/tag/featured`

        if (take !== 0) 
            url += `/${take}`
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getProductsByCategory = async (category = '') => {
        let url = `${baseUrl}/category`

        if (category !== '') 
            url += `/${category}`
        const res = await fetch(url)
        setProductsByCategory(await res.json())
    }

    const getProductsByRating = async (rating = 0) => {
        let url = `${baseUrl}/rating`

        if (rating !== 0) 
            url += `/${rating}`
        const res = await fetch(url)
        setProductsByRating(await res.json())
    }


    return <ProductContext.Provider value={{product, products, productsByCategory, productsByRating, getProduct, getProducts, getProductByTag, getProductsByCategory, getProductsByRating}}>
        {children}
    </ProductContext.Provider>
}
export default ProductProvider