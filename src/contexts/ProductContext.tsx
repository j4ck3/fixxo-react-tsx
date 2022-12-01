import { useContext, createContext, useState} from 'react'
import { ProductItem } from '../models/ProductModels';

interface Props {
    children: any;
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getProducts: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

export const ProductProvider: React.FC<Props> = ({children}) => {
    const EMPTY_PRODUCT_ITEM: ProductItem = {articleNumber: '', name: '', category: '', price: 0, imageName: '', item: null}
    const baseUrl:string = "https://win22-webapi.azurewebsites.net/api/products"
    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT_ITEM)
    const [products, setProducts] = useState<ProductItem[]>([])

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined){
            const res = await fetch(baseUrl + `/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async (take: number = 0) => {
        let url = baseUrl

        if (take !== 0) 
            url = baseUrl + `?take=${take}`
        const res = await fetch(url)
        setProducts(await res.json())
    }

    return <ProductContext.Provider value={{product, products, getProduct, getProducts}}>
        {children}
    </ProductContext.Provider>
}
export default ProductProvider