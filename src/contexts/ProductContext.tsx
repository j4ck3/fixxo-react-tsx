import { gql, useMutation } from '@apollo/client';
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
    productsByTag: ProductItem[]
    getProduct: (productId?: any) => void
    getProducts: () => void;
    createProduct: (product: any) => void;
    getProductsByCategory: (category?: string) => void;
    getProductsByRating: (rating?: string) => void;
    getProductByTag: (tag?: string) => void
    deleteProduct: (productId?: any) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

export const ProductProvider: React.FC<Props> = ({children}) => {
    const EMPTY_PRODUCT_ITEM: ProductItem = {articleNumber: '', tag: '', name: '', category: '', description: '', price: '', rating: '', imageName: '', vendorId: '', item: null, _id: ''}
    const baseUrl:string = 'http://localhost:5000/graphql'
    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT_ITEM)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [productsByCategory, setProductsByCategory] = useState<ProductItem[]>([])
    const [productsByRating, setProductsByRating] = useState<ProductItem[]>([])
    const [productsByTag, setProductsByTag] = useState<ProductItem[]>([])


    const getProduct = async (prodcutId: String) => {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify ({
                query: `
                query getProduct($id: ID) { 
                    product (id: $id) { _id, name, price, description, category, tag, rating, imageName, vendor {name}}
                  }
                `,
                variables: { id: prodcutId }
            })
        }).then(res => res.json())
        .then(data => {
            setProduct(data.data.product)
        })
    }


    const getProducts = async () => {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify ({
            query: `
            { products { _id, name, price, tag, category, description, rating, imageName, vendor {name}}}
            `
            })
        }).then(res => res.json())
        .then(data => {
            setProducts(data.data.products)
        })
    }


    const createProduct = async (product: any) => {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify ({
            query: `
            mutation addProduct($name: String!, $price: String!, $tag: String!, $rating: String!, $category: String!, $description: String!, $imageName: String, $vendorId: ID!) {
                addProduct(name: $name, price: $price, tag: $tag, rating: $rating, category: $category, description: $description, imageName: $imageName, vendorId: $vendorId) {
                  name
                }
              }
            `,
            variables: product
            })
        }).then(res => res.json())
    }

    const getProductByTag = async ( tag = '') => {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify ({
                query: `
                query getProductsByTag($tag: String) { 
                    productsByTag(tag: $tag) {
                    _id, name, price, description, category, tag, rating, imageName, vendor {name}}}
                `,
                variables: {tag: tag}
            })
        }).then(res => res.json())
        .then(data => {
            setProductsByTag(data.data.productsByTag)
        })
    }


    const getProductsByCategory = async ( category = '') => {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify ({
                query: `
                query getProductsByCategory($category: String) { 
                    productsByCategory(category: $category) {
                    _id, name, price, description, category, tag, rating, imageName, vendor {name}}}
                `,
                variables: {category: category}
            })
        }).then(res => res.json())
        .then(data => {
            setProductsByCategory(data.data.productsByCategory)
        })
    }

    const getProductsByRating = async ( rating = '') => {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify ({
                query: `
                query getProductsByRating($rating: String) { 
                    productsByRating(rating: $rating) {
                    _id, name, price, description, category, tag, rating, imageName, vendor {name}}}
                `,
                variables: {rating: rating}
            })
        }).then(res => res.json())
        .then(data => {
            setProductsByRating(data.data.productsByRating)
        })
    }


    const deleteProduct = async ( prodcutId: String) => {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { "content-type": "application/json"},
            body: JSON.stringify ({
                query: `
                mutation deleteProductById( $id: ID){
                    deleteProduct(id: $id) {_id, name, price, description, category, tag, rating, imageName, vendor {name}}
                }
                `,
                variables: { id: prodcutId }
            })
        }).then(res => res.json())
    }


    return <ProductContext.Provider 
    value={{product, products, productsByCategory, productsByRating, productsByTag, 
    getProduct, createProduct, getProducts, getProductByTag, getProductsByCategory, getProductsByRating, deleteProduct
    }}>
    {children}
    </ProductContext.Provider>
}
export default ProductProvider