import React from 'react'
import { Product as ProductType } from '../typings'
import Product from './Product'

interface Props {
  products: ProductType[]
}

const ProductFeed = ({ products }: Props) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductFeed