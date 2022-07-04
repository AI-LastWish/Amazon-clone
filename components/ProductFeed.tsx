import React from 'react'
import { Product as ProductType } from '../typings'
import Product from './Product'

interface Props {
  products: ProductType[]
}

const ProductFeed = ({ products }: Props) => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductFeed