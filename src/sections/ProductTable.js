import React from 'react'
import ReadMore from '../components/ReadMore'
import { useProductContext } from '../contexts/ProductContext'



const productTable = ({items}) => {
const { deleteProduct } = useProductContext()
  return (
    <>
    <div className='container mb-5 '>
        <table className='w-100'>
            <thead>
                <tr>
                    <th className='mr-4'>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Tag</th>
                    <th>Rating</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {items.map((product) => (
                <tr key={product._id}>
                    <td><img src={product.imageName} className='product-table-img' alt={product.name}/></td>
                    <td>{product.name}</td>
                    <td><ReadMore max={20}>{product.description}</ReadMore></td>
                    <td>{product.category}</td>
                    <td>{product.tag}</td>
                    <td>{product.rating}</td>
                    <td><button className='prodcut-table-btn' title='Delete this product' onClick={() => deleteProduct(product._id)}><i className="fa-solid fa-trash-can"></i></button></td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default productTable