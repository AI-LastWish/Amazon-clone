import React from 'react'
import { Product } from '../typings'

interface Props {
  product: Product
}

const Product = ({ product }: Props) => {
  return (
    <div>{product.description}</div>
  )
}

export default Product