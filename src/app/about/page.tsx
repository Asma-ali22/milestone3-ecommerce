import Navbar from '../components/navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'

export const About  = () => {
  return (
   <div>
    <Navbar/>
    <div className="text-center bg-gray-50 py-8">
      <h1 className="text-4xl font-bold text-red-600">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        We are passionate about crafting the best pizzas just for you!
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Our Journey</h2>
        <p className="mt-2 text-gray-700">
          Established in 2010, we have served millions of happy customers.
        </p>
      </div>
      <Image
        src="/about1.webp"
        alt="Our Team"
        width={500}
        height={500}
        className="mt-8 mx-auto w-2/3 rounded-lg shadow-lg"
      />
    </div>
    <Footer/>
     </div>
  )
}
export default About