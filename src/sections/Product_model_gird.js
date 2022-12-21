import React from 'react'
import ModelItem from '../components/ModelItem'



const Product_model_gird = ({title, items}) => {

  return (
    <>
     <div className="container-xxl mb-5">
        <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

          {
            items.map(products => <ModelItem key={products._id} item={products}/>)
          }
        </div>
    </div>
    </>
  )
}


export default Product_model_gird

/*  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY)

 if (loading) {return <center>Loading products</center>}
 if (error) {return <center>Something went wrong loading the products</center>}
 */

/* const GET_PRODUCTS_QUERY = gql`{ products { _id, name, price, tag, rating, category, description, imageName, vendor {name}}}` */