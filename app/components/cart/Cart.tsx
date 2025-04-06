'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/store';
import { removeFromCart, updateQuantity, toggleCart } from '@/app/store';
import Link from 'next/link';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  
  // Calculate totals
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = items.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;
  
  // Close cart when pressing escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        dispatch(toggleCart());
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, dispatch]);

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={() => dispatch(toggleCart())}
      ></div>
      
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col animate-slideInRight">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Votre panier ({items.reduce((count, item) => count + item.quantity, 0)})</h2>
          <button 
            onClick={() => dispatch(toggleCart())} 
            className="text-gray-500 hover:text-black"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center p-4">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className="mb-4 text-gray-500">Votre panier est vide</p>
            <button 
              onClick={() => dispatch(toggleCart())}
              className="bg-black text-white px-6 py-2"
            >
              Continuer mes achats
            </button>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-auto p-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex py-4 border-b">
                  <div className="w-20 h-20 bg-gray-200 flex-shrink-0">
                    <div className="w-full h-full bg-gray-200"></div>
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">Taille: {item.size}</p>
                      </div>
                      <p className="text-sm font-medium">{(item.price * item.quantity).toFixed(2)} €</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border">
                        <button 
                          className="px-2 py-1 hover:bg-gray-100"
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch(updateQuantity({ id: item.id, size: item.size, quantity: item.quantity - 1 }));
                            }
                          }}
                          aria-label="Réduire la quantité"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 hover:bg-gray-100"
                          onClick={() => dispatch(updateQuantity({ id: item.id, size: item.size, quantity: item.quantity + 1 }))}
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => dispatch(removeFromCart({ id: item.id, size: item.size }))}
                        className="text-sm text-gray-500 hover:text-black"
                        aria-label="Supprimer l'article"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t p-4 bg-gray-50">
              <div className="mb-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison estimée</span>
                  <span>{shipping.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-medium">
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>
              
              <Link 
                href="/checkout"
                className="block w-full bg-black text-white text-center py-3 hover:bg-gray-800"
                onClick={() => dispatch(toggleCart())}
              >
                Passer à la caisse
              </Link>
              <button 
                className="block w-full text-center py-3 mt-2 border border-black hover:bg-gray-100"
                onClick={() => dispatch(toggleCart())}
              >
                Continuer mes achats
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;