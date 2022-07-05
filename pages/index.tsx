import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
import { Product } from '../typings'

interface Props {
  products: Product[]
}

const Home = ({ products }: Props) => {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  const products = await fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
  return {
    props: {
      products
    }
  }
}
