import Image from "next/image"
import Link from "next/link"

const Navbar = () => {


  return (
    <header className="flex justify-between px-4 md:px-12 py-2 items-center fixed top-0 bg-white w-full z-50 shadow">
      <Link href={'/'}>
        <Image src="/logo.svg" alt="Logo" width={150} height={40} priority />
      </Link>
      <div className="flex items-center gap-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900">Bosh Sahifa</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900">All product</Link>
        </nav>
        <button className="button bg-blue-600 border text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">Log in</button>
        <button className="button bg-transparent border-blue-600 hover:text-white hover:bg-blue-600">Sign up</button>
      </div>
    </header>
  )
}

export default Navbar