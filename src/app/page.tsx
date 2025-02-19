import Hero from '@/components/hero';
import ProductCard from '@/components/product';
import { ProductType } from '@/interface';

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products")
  const products: ProductType[] = await res.json()

  return (
    <main className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 pt-'>
      <Hero />
      <section className='flex flex-col space-y-12'>
        <h1 className='text-5xl text-center font-bold'>BUTTON SHOP DEALS</h1>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map((item: ProductType) => (
            <ProductCard key={String(item?.id)} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
