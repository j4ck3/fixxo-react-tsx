import { gql, useQuery } from '@apollo/client';
import { useContext, createContext, useState} from 'react'
import { ProductItem } from '../models/ProductModels';

interface Props {
    children: any;
}

export interface ProductContextType {
    product: ProductItem
    productgql: ProductItem
    products: ProductItem[]
    productsByCategory: ProductItem[]
    productsByRating: ProductItem[]
    getProduct: (id?: any) => void
    getProductgql: (id?: any) => void
    getProducts: () => void;
    getProductsByCategory: (category?: string) => void;
    getProductsByRating: (rating?: string) => void;
    getProductByTag: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

export const ProductProvider: React.FC<Props> = ({children}) => {
    const EMPTY_PRODUCT_ITEM: ProductItem = {articleNumber: '', tag: '', name: '', category: '', description: '', price: '', rating: '', imageName: '', vendorId: '', item: null}
    const baseUrl:string = 'http://localhost:5000/api/products'
    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT_ITEM)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [productsByCategory, setProductsByCategory] = useState<ProductItem[]>([])
    const [productsByRating, setProductsByRating] = useState<ProductItem[]>([])
    const [productgql, setProductgql] = useState<ProductItem>(EMPTY_PRODUCT_ITEM)


    const getProduct = async (id: any) => {
        if (id !== undefined){
            const res = await fetch(`${baseUrl}/product/${id}`)
            setProduct(await res.json())
        }  
    }


    const getProductgql = async (id: any) => {
        if (id !== undefined){
            const GET_PRODUCT = gql`{product(id: "${id}"){name, tag, price, category, description, rating}}`
            const { loading, error, data } = useQuery(GET_PRODUCT)

            if (loading) return <p>Loading...</p>
            if (error) return <p>Could not get Product</p>
            setProductgql(data.json())
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

    const getProductsByRating = async (rating = '') => {
        let url = `${baseUrl}/rating`

        if (rating !== '') 
            url += `/${rating}`
        const res = await fetch(url)
        setProductsByRating(await res.json())
    }


    return <ProductContext.Provider value={{product, productgql, products, productsByCategory, productsByRating, getProduct, getProductgql, getProducts, getProductByTag, getProductsByCategory, getProductsByRating}}>
        {children}
    </ProductContext.Provider>
}
export default ProductProvider