"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  return (
    <header className="flex justify-between px-4 md:px-12 py-2 items-center fixed top-0 bg-white w-full z-50 shadow">
      <Link href={'/'} className="flex gap-3 items-center">
        <Image src="/logo.jpg" alt="Logo" height={'50'} width={'50'} style={{ width: "auto", height: "auto" }} priority />
        <p className="text-4xl font-bold text-black">Button</p>
      </Link>
      <div className="flex items-center gap-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900 text-black">Bosh Sahifa</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900 text-black">All product</Link>
          <Link href={'/contacts'} className="mr-5 hover:text-gray-900 text-black">Contacts</Link>
        </nav>
        <button onClick={() => router.push('/shopping-cart')} className="button flex items-center gap-2 bg-blue-600 border text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span>My bag</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar