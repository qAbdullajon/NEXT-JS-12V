'use client'

import { ProductType } from "@/interface"
import { Dialog } from "@headlessui/react"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import CustomImage from "@/components/image"
import ReactStars from 'react-stars'
import Notify from "@/components/toastify"
import 'react-toastify/dist/ReactToastify.css';

const ProductModal = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState<ProductType>()
  const [isOpen, setIsOpen] = useState(true)

  const { id } = useParams()
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const product = await res.json()
      setProduct(product)
      setLoading(false)
    }

    getData()
  }, [id])

  function addToBag() {
    const products: ProductType[] = JSON.parse(localStorage.getItem('carts') as string) || []
    const isExistProduct = products.find(c => c.id === product?.id)
    if (isExistProduct) {
      const updateProducts = products.map(c => {
        if (c.id === product?.id) {
          console.log({
            ...c, quantity: c.quantity + 1
          });

          return {
            ...c, quantity: c.quantity + 1
          }
        }
        return c
      })

      localStorage.setItem('carts', JSON.stringify(updateProducts))
    } else {
      const data = [...products, { ...product, quantity: 1 }]
      localStorage.setItem("carts", JSON.stringify(data))
    }
    Notify("Product added to your bag!!")
  }

  function onClose() {
    setIsOpen(false)
    router.back()
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className='relative z-50'
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <Dialog.Panel
            className={'mx-auto max-w-3xl rounded bg-white p-10'}
          >
            {loading ? (
              <div className="h-10 w-10 rounded-full border-2 border-dotted border-blue-600 animate-spin"></div>
            ) : (
              <div className="flex gap-x-8 h-96">
                {product?.image && (
                  <div className="relative w-72 h-full hidden md:inline">
                    <CustomImage product={product} fill />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibolf">
                      {product?.title}
                    </h4>
                    <p className="font-medium text-sm">
                      ${product?.price}
                    </p>
                    <div className="flex items-center text-sm my-4">
                      <p>{product?.rating.rate}</p>
                      {product?.rating.rate && (
                        <div className="flex items-center ml-2 pb-[1px] mr-6">
                          <ReactStars value={product?.rating.rate} edit={false} />
                        </div>
                      )}
                      <p className="text-blue-600 hover:underline cursor-pointer text-sm">
                        See all {product?.rating.count} reviews
                      </p>
                    </div>
                    <p className="line-clamp-5 text-sm">{product?.description}</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <button onClick={addToBag} className="button w-full bg-blue-600 text-white border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black ">Add to bag</button>
                    <button onClick={() => window.location.reload()} className="button w-full bg-transparent border-blue-600 hover:text-white hover:bg-blue-600">View full details</button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default ProductModal