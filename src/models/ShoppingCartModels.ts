import { ProductItem } from "./ProductModels"

export interface cartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}