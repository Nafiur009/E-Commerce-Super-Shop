import React from 'react';
import { ShoppingCart, Search, Menu, Heart, User, ShoppingBag } from 'lucide-react';

function App() {
  const categories = [
    'Groceries', 'Fresh Produce', 'Spices', 'Household', 'Personal Care', 'Snacks'
  ];

  const featuredProducts = [
    {
      name: 'Premium Basmati Rice',
      price: '৳150/kg',
      image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Organic Vegetables Pack',
      price: '৳220',
      image: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Bengali Spice Set',
      price: '৳350',
      image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6 cursor-pointer" />
              <h1 className="text-2xl font-bold">বাংলা সুপার শপ</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-full text-gray-800 w-64"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Heart className="h-6 w-6 cursor-pointer" />
              <User className="h-6 w-6 cursor-pointer" />
              <div className="relative">
                <ShoppingCart className="h-6 w-6 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-emerald-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-emerald-700 hover:bg-emerald-100 rounded-full whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Fresh & Quality Products</h2>
            <p className="text-xl mb-6">Get your daily necessities delivered to your doorstep</p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-bold">{product.price}</span>
                  <button className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700">
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">Your trusted source for quality Bangladeshi groceries and household items.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">Offers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Dhaka Street</li>
                <li>Bangladesh</li>
                <li>Phone: +880 1234567890</li>
                <li>Email: info@bangla-shop.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-800"
                />
                <button className="bg-emerald-600 px-4 py-2 rounded-r-lg hover:bg-emerald-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;