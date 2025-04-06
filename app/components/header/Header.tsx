'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/app/store';
import { RootState } from '@/app/store/store';
import MenuDropdown from './MenuDropdown';
import Cart from '../cart/Cart';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                SELINO
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link 
                href="/femme"
                className={`px-3 py-2 text-sm font-medium ${
                  pathname?.includes('/femme') ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                Femme
              </Link>
              <Link 
                href="/homme"
                className={`px-3 py-2 text-sm font-medium ${
                  pathname?.includes('/homme') ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                Homme
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button className="relative rounded-full p-1 text-gray-700 hover:text-black">
                  <span className="sr-only">Search</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-shrink-0 ml-4">
                <Link href="/account" className="relative rounded-full p-1 text-gray-700 hover:text-black">
                  <span className="sr-only">Account</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              </div>
              
              <div className="flex-shrink-0 ml-4">
                <button 
                  onClick={() => dispatch(toggleCart())}
                  className="relative rounded-full p-1 text-gray-700 hover:text-black"
                >
                  <span className="sr-only">Cart</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                      {itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {menuOpen && <MenuDropdown />}
      </header>
      
      {/* Shopping Cart */}
      <Cart />
    </>
  );
};

export default Header;