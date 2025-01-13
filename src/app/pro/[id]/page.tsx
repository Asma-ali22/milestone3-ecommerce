"use client"
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

// Define Product type
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; // Add image URL
}

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 10.99,
    description: "Classic Margherita with fresh mozzarella and basil.",
    image: "/pizza1.jpeg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 12.99,
    description: "Spicy pepperoni with extra cheese.",
    image: "/pizza2.webp",
  },
  {
    id: 3,
    name: "Veggie Pizza",
    price: 11.99,
    description: "Loaded with fresh vegetables.",
    image: "/pizza3.webp",
  },
  {
    id: 3,
    name: "Veggie Pizza",
    price: 11.99,
    description: "Loaded with fresh vegetables.",
    image: "/pizza3.webp",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    price: 13.99,
    description: "BBQ sauce, chicken, onions, and cilantro.",
    image: "/pizza4.jpeg",
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    price: 12.99,
    description: "Ham, pineapple, and mozzarella cheese.",
    image: "/pizza5.jpeg",
  },
  {
    id: 6,
    name: "Buffalo Pizza",
    price: 14.99,
    description: "Spicy buffalo sauce, chicken, and blue cheese.",
    image: "/pizza6.jpeg",
  },
  {
    id: 7,
    name: "Meat Lovers Pizza",
    price: 15.99,
    description: "Pepperoni, sausage, bacon, and ham.",
    image: "/pizza7.jpeg",
  },
  {
    id: 8,
    name: "Cheese Pizza",
    price: 9.99,
    description: "Extra cheesy with mozzarella and parmesan.",
    image: "/pizza7.jpeg",
  },
  {
    id: 9,
    name: "Pesto Pizza",
    price: 12.99,
    description: "Pesto sauce, tomatoes, and feta cheese.",
    image: "/pizza8.webp",
  },
];

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: Props) {
  // Convert id to number
  const productId = parseInt(params.id);

  // Find the product
  const product = products.find((p) => p.id === productId);

  // If product not found, show 404 page
  if (!product) {
    notFound();
  }

  // Add to cart functionality
  const addToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
        {/* Product Image */}
        <div className="w-full h-64 relative">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        {/* Product Details */}
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-800 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-800 mb-6">${product.price}</p>
          <button
            onClick={addToCart}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}