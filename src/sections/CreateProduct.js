import React, { useState } from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'

//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.
//Du ska ha minst ett enkelt enhetstest.



const GET_VENDORS_QUERY = gql`{ vendors { _id, name}}`
const POST_PRODUCT_QUERY = gql
`
mutation addProduct($name: String!, $price: String!, $tag: String!, $rating: String!, $category: String!, $description: String!, $imageName: String, $vendorId: ID!) {
  addProduct(name: $name, price: $price, tag: $tag, rating: $rating, category: $category, description: $description, imageName: $imageName, vendorId: $vendorId) {
    name
  }
}
`

const CreateProductForm = () => {
    const defualt_values = {name: '', price: '', category: '', tag: '', rating: '', description: '', imageName: '', vendorId: '0'}
    const [ product, setProduct ] = useState(defualt_values)
    const { loading, error, data } = useQuery(GET_VENDORS_QUERY)
    const [ addProduct ] = useMutation(POST_PRODUCT_QUERY)

    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct({variables: product})
        setProduct(defualt_values)
      } 
  
    const populateBrands = () => {
      if (loading) return <option disabled>Loading...</option>
      if (error) return <option disabled>Could not get Brands</option>
      return data.vendors.map(vendor => <option key={vendor._id} value={vendor._id}>{vendor.name}</option>)
    }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <form onSubmit={handleSubmit}>
            <h5>Add a product</h5>
            <input type="text" required value={product.name} onChange={(e) => setProduct({...product, name: e.target.value} )} className='form-control mb-3' placeholder='Name' />
            <input type="text" required value={product.price} onChange={(e) => setProduct({...product, price: e.target.value} )} className='form-control mb-3' placeholder='Price' />
            <input type="text" required value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value} )} className='form-control mb-3' placeholder='Tag' />
            <select type="text" required value={product.category} onChange={(e) => setProduct({...product, category: e.target.value} )} className='form-select mb-3'>
            <option value='0' defaultChecked disabled>Choose a Category</option>
            <option value='Shoes'>Shoes</option>
            <option value='Shirts'>T-Shirts</option>
            <option value='Pants'>Pants</option>
            <option value='Jackets'>Jackets</option>
            <option value='Bags'>Bags</option>
            </select>
            <input type="text" value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value} )} className='form-control mb-3' placeholder='Rating: 0-5' />
            <input type="text" value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value} )} className='form-control mb-3' placeholder='Image URL' />
            <textarea          value={product.description} onChange={(e) => setProduct({...product, description: e.target.value} )} className='form-control mb-5' placeholder='Description'></textarea>

            <select value={product.vendorId} onChange={(e) => setProduct({...product, vendorId: e.target.value})} className='form-select'>
              <option value='0' disabled >Choose a Brand</option>
              {populateBrands()}
            </select>
            <button type='submit' className='btn'>CREATE PRODUCT</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateProductForm