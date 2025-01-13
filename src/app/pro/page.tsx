

// pro/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Define Product type
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; // Add image URL
}

// Sample products data (9 products)
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

export default function Home() {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Pizzas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="w-full h-48 relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            {/* Product Details */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-800 mb-4">{product.description}</p>
              <p className="text-xl font-bold text-gray-800">${product.price}</p>
              <Link
                href={`/pro/${product.id}`}
                className="mt-4 inline-block w-full text-center bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
}