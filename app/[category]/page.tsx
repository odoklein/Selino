import ProductCard from '@/app/components/products/ProductCard';

// Mock data for testing
const products = [
  {
    id: "1",
    name: "Sneakers Often01",
    price: 59.99,
    image: "/images/products/sneaker1.jpg",
    colors: ["#FFFFFF", "#000000", "#DDDDDD"],
    category: "chaussures"
  },
  {
    id: "2",
    name: "Sneakers Often02",
    price: 59.99,
    image: "/images/products/sneaker2.jpg",
    colors: ["#000000", "#FFFFFF"],
    category: "chaussures"
  },
  {
    id: "3",
    name: "Sneakers Often03",
    price: 59.99,
    image: "/images/products/sneaker3.jpg",
    colors: ["#DDDDDD", "#000000", "#FFFFFF"],
    category: "chaussures"
  },
  {
    id: "4",
    name: "Sneakers Often04",
    price: 59.99,
    image: "/images/products/sneaker4.jpg",
    colors: ["#0A3D62", "#FFFFFF", "#000000"],
    category: "chaussures"
  },
  {
    id: "5",
    name: "Sneakers Often05",
    price: 59.99,
    image: "/images/products/sneaker5.jpg",
    colors: ["#000000"],
    category: "chaussures"
  },
  {
    id: "6",
    name: "Sneakers Often06",
    price: 59.99,
    image: "/images/products/sneaker6.jpg",
    colors: ["#DDDDDD", "#000000"],
    category: "chaussures"
  },
  {
    id: "7",
    name: "Sneakers Often07",
    price: 59.99,
    image: "/images/products/sneaker7.jpg",
    colors: ["#000000", "#FFFFFF", "#DDDDDD"],
    category: "chaussures"
  },
  {
    id: "8",
    name: "Sneakers Often08",
    price: 59.99,
    image: "/images/products/sneaker8.jpg",
    colors: ["#FFFFFF"],
    category: "chaussures"
  }
];

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  // Capitalize first letter for display
  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">{displayCategory}</h1>
      </div>
      
      {/* Filter tabs */}
      <div className="flex justify-center mb-8 border-b border-gray-200">
        <div className="flex space-x-4">
          {['Tout afficher', 'Vêtements', 'Chaussures confort', 'Collection Denim'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 text-sm ${filter === 'Tout afficher' ? 'border-b-2 border-black' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            colors={product.colors}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}