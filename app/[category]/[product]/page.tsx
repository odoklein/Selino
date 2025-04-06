'use client';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/store';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductPage({ params }: { params: { category: string; product: string } }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  
  // Mock product data - would come from API in a real app
  const product = {
    id: params.product,
    name: `Sneakers Often${params.product}`,
    price: 59.99,
    images: [
      `/images/products/sneaker${params.product}-1.jpg`,
      `/images/products/sneaker${params.product}-2.jpg`,
      `/images/products/sneaker${params.product}-3.jpg`,
      `/images/products/sneaker${params.product}-4.jpg`,
    ],
    description: "Baskets montant avec semelle en matière légère et respirante, permettant l'évacuation de l'humidité. Fabrication en matériau souple, idéal pour un usage quotidien.",
    details: "Un design exclusif SELINO, conçu selon les tendances techniques avec une forme arrondie et des détails sportifs. Matière du dessus et doublure en polyester. Semelle extérieure running ultra légère.",
    sizes: ["38", "39", "40", "41", "42", "43", "44"]
  };
  
  // For now we'll use placeholder colors if real images aren't available
  const placeholderColors = ["#E2E2E2", "#222222", "#777777", "#DDDDDD"];
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Veuillez sélectionner une taille');
      return;
    }
    
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: selectedSize
    }));

    // Show a confirmation message
    alert('Produit ajouté au panier !');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          {/* Main product image slider */}
          <Swiper
  spaceBetween={10}
  navigation={true}
  thumbs={{ swiper: thumbsSwiper }}
  modules={[FreeMode, Navigation, Thumbs]}
  className="mb-4 aspect-square"
>
  {product.images.map((img, index) => (
    <SwiperSlide key={index}>
      <div className="relative w-full h-full aspect-square bg-gray-100">
        <img 
          src={`/images/products/${img}`} 
          alt={`Product image ${index + 1}`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>


          
          {/* Thumbnail slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper"
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative cursor-pointer h-20 bg-gray-100">
                  {/* Replace with actual thumbnails once available */}
                  <div 
                    className="w-full h-full" 
                    style={{ backgroundColor: placeholderColors[index % placeholderColors.length] }}
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="md:w-1/2">
          <h1 className="text-xl font-medium mb-2">{product.name}</h1>
          <p className="text-xl mb-4">{product.price.toFixed(2)} €</p>
          
          <div className="mb-6">
            <label className="block text-sm mb-2">Taille</label>
            <select 
              className="w-full p-2 border border-gray-300 mb-4"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Sélectionnez une taille</option>
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            
            <button 
              className="w-full bg-black text-white py-3 px-4 mb-4"
              onClick={handleAddToCart}
            >
              Ajouter à mon panier d'achat
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-4">
            <h2 className="font-medium mb-2">Description</h2>
            <p className="text-sm text-gray-600 mb-4">
              {product.description}
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h2 className="font-medium mb-2">Composition et conseils d'entretien</h2>
            <p className="text-sm text-gray-600">
              {product.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}