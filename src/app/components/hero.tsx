import React from 'react'
import Image from 'next/image';
const Hero = () => {
  return (
    
    
    <div className="text-center bg-gray-50 py-8">
    <h1 className="text-4xl font-bold text-red-600">Welcome to Pizza World</h1>
    <p className="mt-4 text-lg text-gray-700">Savor the taste of freshly made pizzas!</p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <Image
        src="/hero1.jpg"
        alt="Delicious Pizza"
        width={500}
        height={500}
        className="rounded-lg shadow-lg w-full"
      />
      <div>
        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="list-disc list-inside mt-4 text-left">
          <li>Fresh Ingredients</li>
          <li>Authentic Recipes</li>
          <li>Fast Delivery</li>
          <li>Family-Friendly Dining</li>
        </ul>
      </div>
    </div>
  </div>
    );
  };
  

export default Hero