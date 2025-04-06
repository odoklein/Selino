'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlistItem } from '@/app/store';
import { RootState } from '@/app/store/store';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  category: string;
}

const ProductCard = ({ id, name, price, image, colors, category }: ProductCardProps) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.some(item => item.id === id);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square mb-2 overflow-hidden bg-gray-100">
        <Link href={`/${category}/${id}`}>
          <div className="w-full h-full bg-gray-200 hover:opacity-90 transition-opacity">
            {/* Use a colored div as placeholder or an actual image if available */}
            <div 
              className="w-full h-full" 
              style={{ 
                backgroundColor: colors[0] || "#E5E5E5"
              }}
            ></div>
          </div>
        </Link>
        
        <button 
          className="absolute top-2 right-2 p-1 z-10 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all"
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleWishlistItem({ id, name, price, image }));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isInWishlist ? "black" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        {/* Quick shop button that appears on hover */}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 transform transition-transform duration-300 text-center">
            <Link 
              href={`/${category}/${id}`}
              className="text-xs font-medium hover:underline"
            >
              VOIR LE PRODUIT
            </Link>
          </div>
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-sm">{name}</span>
        <span className="text-sm font-medium">{price.toFixed(2)} €</span>
        
        <div className="flex mt-2 space-x-1">
          {colors.map((color, index) => (
            <div 
              key={index} 
              className="w-3 h-3 rounded-full border border-gray-300" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;