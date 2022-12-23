import { render } from '@testing-library/react'
import { getProductsByTag, productsByTag } from '../contexts/ProductContext'
import App from '../App'

describe (getProductsByTag, () => {

    it ('function getProductsByTag should return an array with products and match an object (tag) with type "featured"', () => {
        render(<App />)

        const value = productsByTag
        
        expect(value).toMatchObject<{productsByTag}>({tag: 'featured'})
        })
    })
