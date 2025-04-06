'use client';

import Link from 'next/link';

const categories = [
  { name: 'Nouveautés', href: '/nouveautes' },
  { name: 'Basiques', href: '/basiques' },
  { name: 'Promotions', href: '/promotions' },
  { name: 'Chaussures', href: '/chaussures' },
  { name: 'Survêtement', href: '/survetement' },
  { name: 'Accessoires', href: '/accessoires' },
  { name: 'Sacs | Sacs à dos', href: '/sacs' },
  { name: 'Total look', href: '/total-look' },
  { name: 'Collection Rustique', href: '/collection-rustique' },
  { name: 'Jeans', href: '/jeans' },
  { name: 'Pantalons', href: '/pantalons' },
  { name: 'Shorts', href: '/shorts' },
  { name: 'T-Shirts', href: '/t-shirts' },
  { name: 'Polos', href: '/polos' },
  { name: 'Chemises', href: '/chemises' },
  { name: 'Sweat', href: '/sweat' },
  { name: 'Blousons et vestes', href: '/vestes' },
  { name: 'Maille', href: '/maille' },
];

const brands = [
  { name: '&(AND)', href: '/brand/and' },
  { name: 'STWD', href: '/brand/stwd' },
  { name: 'Often', href: '/brand/often' },
];

const MenuDropdown = () => {
  return (
    <div className="md:hidden bg-white border-b border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <div className="flex space-x-4 mb-4 px-3">
          <Link href="/femme" className="text-base font-medium text-gray-700 hover:text-black">
            Femme
          </Link>
          <Link href="/homme" className="text-base font-medium text-gray-900 border-b border-black">
            Homme
          </Link>
        </div>

        <div className="px-3 mb-4">
          <h3 className="text-sm font-medium text-gray-500">Des suggestions pour toi</h3>
        </div>

        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black"
          >
            {category.name}
          </Link>
        ))}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="px-3 mb-3">
            <h3 className="text-sm font-medium text-gray-500">Marques</h3>
          </div>
          
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;