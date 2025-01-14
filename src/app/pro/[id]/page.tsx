// "use client"
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Navbar from '@/app/components/navbar';
// import Footer from '@/app/components/footer';

// // Define Product type
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string; // Add image URL
// }

// // Sample products data
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Margherita Pizza",
//     price: 10.99,
//     description: "Classic Margherita with fresh mozzarella and basil.",
//     image: "/pizza1.jpeg",
//   },
//   {
//     id: 2,
//     name: "Pepperoni Pizza",
//     price: 12.99,
//     description: "Spicy pepperoni with extra cheese.",
//     image: "/pizza2.webp",
//   },
//   {
//     id: 3,
//     name: "Veggie Pizza",
//     price: 11.99,
//     description: "Loaded with fresh vegetables.",
//     image: "/pizza3.webp",
//   },
//   {
//     id: 3,
//     name: "Veggie Pizza",
//     price: 11.99,
//     description: "Loaded with fresh vegetables.",
//     image: "/pizza3.webp",
//   },
//   {
//     id: 4,
//     name: "BBQ Chicken Pizza",
//     price: 13.99,
//     description: "BBQ sauce, chicken, onions, and cilantro.",
//     image: "/pizza4.jpeg",
//   },
//   {
//     id: 5,
//     name: "Hawaiian Pizza",
//     price: 12.99,
//     description: "Ham, pineapple, and mozzarella cheese.",
//     image: "/pizza5.jpeg",
//   },
//   {
//     id: 6,
//     name: "Buffalo Pizza",
//     price: 14.99,
//     description: "Spicy buffalo sauce, chicken, and blue cheese.",
//     image: "/pizza6.jpeg",
//   },
//   {
//     id: 7,
//     name: "Meat Lovers Pizza",
//     price: 15.99,
//     description: "Pepperoni, sausage, bacon, and ham.",
//     image: "/pizza7.jpeg",
//   },
//   {
//     id: 8,
//     name: "Cheese Pizza",
//     price: 9.99,
//     description: "Extra cheesy with mozzarella and parmesan.",
//     image: "/pizza7.jpeg",
//   },
//   {
//     id: 9,
//     name: "Pesto Pizza",
//     price: 12.99,
//     description: "Pesto sauce, tomatoes, and feta cheese.",
//     image: "/pizza8.webp",
//   },
// ];

// interface Props {
//   params: {
//     id: string;
//   };
// }

// export default function ProductDetail({ params }: Props) {
//   // Convert id to number
//   const productId = parseInt(params.id);

//   // Find the product
//   const product = products.find((p) => p.id === productId);

//   // If product not found, show 404 page
//   if (!product) {
//     notFound();
//   }

//   // Add to cart functionality
//   const addToCart = () => {
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div>
//       <Navbar/>
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
//         {/* Product Image */}
//         <div className="w-full h-64 relative">
//           <Image
//             src={product.image}
//             alt={product.name}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-lg"
//           />
//         </div>
//         {/* Product Details */}
//         <div className="p-6 text-center">
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-gray-800 mb-4">{product.description}</p>
//           <p className="text-xl font-bold text-gray-800 mb-6">${product.price}</p>
//           <button
//             onClick={addToCart}
//             className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
// "use client"
// import { useState } from 'react';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Navbar from '@/app/components/navbar';
// import Footer from '@/app/components/footer';

// // Define Product type
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string; // Add image URL
// }

// // Sample products data
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Margherita Pizza",
//     price: 10.99,
//     description: "Classic Margherita with fresh mozzarella and basil.",
//     image: "/pizza1.jpeg",
//   },
//   {
//     id: 2,
//     name: "Pepperoni Pizza",
//     price: 12.99,
//     description: "Spicy pepperoni with extra cheese.",
//     image: "/pizza2.webp",
//   },
//   {
//     id: 3,
//     name: "Veggie Pizza",
//     price: 11.99,
//     description: "Loaded with fresh vegetables.",
//     image: "/pizza3.webp",
//   },
//   {
//     id: 4,
//     name: "BBQ Chicken Pizza",
//     price: 13.99,
//     description: "BBQ sauce, chicken, onions, and cilantro.",
//     image: "/pizza4.jpeg",
//   },
//   {
//     id: 5,
//     name: "Hawaiian Pizza",
//     price: 12.99,
//     description: "Ham, pineapple, and mozzarella cheese.",
//     image: "/pizza5.jpeg",
//   },
//   {
//     id: 6,
//     name: "Buffalo Pizza",
//     price: 14.99,
//     description: "Spicy buffalo sauce, chicken, and blue cheese.",
//     image: "/pizza6.jpeg",
//   },
//   {
//     id: 7,
//     name: "Meat Lovers Pizza",
//     price: 15.99,
//     description: "Pepperoni, sausage, bacon, and ham.",
//     image: "/pizza7.jpeg",
//   },
//   {
//     id: 8,
//     name: "Cheese Pizza",
//     price: 9.99,
//     description: "Extra cheesy with mozzarella and parmesan.",
//     image: "/pizza7.jpeg",
//   },
//   {
//     id: 9,
//     name: "Pesto Pizza",
//     price: 12.99,
//     description: "Pesto sauce, tomatoes, and feta cheese.",
//     image: "/pizza8.webp",
//   },
// ];

// interface Props {
//   params: {
//     id: string;
//   };
// }

// export default function ProductDetail({ params }: Props) {
//   // Convert id to number
//   const productId = parseInt(params.id);

//   // Find the product
//   const product = products.find((p) => p.id === productId);

//   // If product not found, show 404 page
//   if (!product) {
//     notFound();
//   }

//   // State to track cart items and total price
//   const [cart, setCart] = useState<{ items: Product[]; totalPrice: number }>({
//     items: [],
//     totalPrice: 0,
//   });

//   // Add to cart functionality
//   const addToCart = () => {
//     setCart((prevCart) => ({
//       items: [...prevCart.items, product],
//       totalPrice: prevCart.totalPrice + product.price,
//     }));
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
//           {/* Product Image */}
//           <div className="w-full h-64 relative">
//             <Image
//               src={product.image}
//               alt={product.name}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-t-lg"
//             />
//           </div>
//           {/* Product Details */}
//           <div className="p-6 text-center">
//             <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//             <p className="text-gray-800 mb-4">{product.description}</p>
//             <p className="text-xl font-bold text-gray-800 mb-6">${product.price}</p>
//             <button
//               onClick={addToCart}
//               className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//         {/* Cart Summary */}
//         <div className="mt-8 bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
//           <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
//           <p className="text-gray-800">Total Items: {cart.items.length}</p>
//           <p className="text-gray-800">Total Price: ${cart.totalPrice.toFixed(2)}</p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
"use client"
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon
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

  // State to track cart items
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

  // State to manage cart dropdown visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart functionality
  const addToCart = () => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      // If product exists, increase its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If product is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
  };

  // Calculate total price of the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Calculate total items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Navbar />
      {/* Cart Icon */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative bg-gray-800 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          <FaShoppingCart size={24} />
          {/* Show total items in cart */}
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {totalItems}
            </span>
          )}
        </button>
        {/* Cart Dropdown */}
        {isCartOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            {cart.length === 0 ? (
              <p className="text-gray-800">Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.product.id} className="flex justify-between">
                      <span>
                        {item.product.name} (x{item.quantity})
                      </span>
                      <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xl font-bold text-gray-800">
                    Total Price: ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
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
      <Footer />
    </div>
  );
}