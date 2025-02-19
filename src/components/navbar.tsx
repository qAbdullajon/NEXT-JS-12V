import Image from "next/image"
import Link from "next/link"

const Navbar = () => {


  return (
    <header className="flex justify-between px-4 md:px-12 py-2 items-center fixed top-0 bg-white w-full z-50 shadow">
      <Link href={'/'} className="flex gap-3 items-center">
        <Image src="/logo.jpg" alt="Logo" height={'50'} width={'50'} priority />
        <p className="text-4xl font-bold text-black">Button</p>
      </Link>
      <div className="flex items-center gap-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900 text-black">Bosh Sahifa</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900 text-black">All product</Link>
        </nav>
        <button className="button bg-blue-600 border text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">Log in</button>
        <button className="button bg-transparent text-black border-blue-600 hover:text-white hover:bg-blue-600">Sign up</button>
      </div>
    </header>
  )
}

export default Navbar