import Link from "next/link"
import React from "react"


const Navbar=()=>{
    return(
<header className="text-gray-600 body-font bg-gray-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-3xl font-bold">Pizza world</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 text-xl hover:text-gray-900">Home</Link>
      <Link href={"/about"} className="mr-5 text-xl hover:text-gray-900">About</Link>
      <Link href={"/pro"}className="mr-5  text-xl hover:text-gray-900">Product</Link>
      <Link  href={"/contact"}className="mr-5  text-xl hover:text-gray-900">Contact</ Link>
      
    </nav>
   
  </div>
</header>
    )
}
export default Navbar
