import React, { useState, useMemo } from 'react';
import Image1 from '../../assets/Men/images1.png';
import Image2 from '../../assets/Men/imag2.png';
import Image3 from '../../assets/Men/imag3.png';
import Image4 from '../../assets/Men/imag4.png';
import Image5 from '../../assets/Men/imag5.png';
import Image6 from '../../assets/Men/images2.png';
import Image7 from '../../assets/Men/images3.png';
import Image8 from '../../assets/Men/images44.png';
import Image9 from '../../assets/Men/images5.png';
import { FaStar, FaEye, FaShoppingBag, FaCheck } from 'react-icons/fa';
import { useCart } from '../../context/useCart';

const ProductsData = [
  {
    id: 101,
    image: Image1,
    color: '#3b82f6',
    colorName: 'Royal Blue',
    title: 'Essential Crewneck T-Shirt',
    category: 'Mens Wear',
    price: 29.99,
    originalPrice: 42.0,
    rating: 4.8,
    reviews: 142,
    badge: 'Best Seller',
    description: '100% premium combed organic cotton crewneck tee engineered for lasting softness and breathable comfort.',
  },
  {
    id: 102,
    image: Image2,
    color: '#0d9488',
    colorName: 'Ocean Teal',
    title: 'Graphic Printed Streetwear Tee',
    category: 'Trending',
    price: 34.99,
    originalPrice: 49.0,
    rating: 4.6,
    reviews: 89,
    badge: 'Trending',
    description: 'Modern relaxed-fit tee with durable silk-screened minimalist geometric graphics.',
  },
  {
    id: 103,
    image: Image3,
    color: '#f97316',
    colorName: 'Peach Sunset',
    title: 'Vintage Washed Fashion Tee',
    category: 'Mens Wear',
    price: 32.5,
    originalPrice: 45.0,
    rating: 4.7,
    reviews: 110,
    badge: 'Popular',
    description: 'Enzyme-washed cotton for a lived-in vintage feel, ribbed collar, and twin-needle hems.',
  },
  {
    id: 104,
    image: Image4,
    color: '#65a30d',
    colorName: 'Olive Green',
    title: 'Urban Lightweight Bomber Jacket',
    category: 'Jackets',
    price: 69.99,
    originalPrice: 99.0,
    rating: 4.9,
    reviews: 204,
    badge: 'Top Rated',
    description: 'Water-resistant coated shell with contrast ribbed cuffs, zipped interior pocket, and athletic silhouette.',
  },
  {
    id: 105,
    image: Image5,
    color: '#1e3a8a',
    colorName: 'Midnight Navy',
    title: 'Traditional Embroidered Ethnic Kurti',
    category: 'Women Ethnic',
    price: 49.99,
    originalPrice: 75.0,
    rating: 4.8,
    reviews: 167,
    badge: 'Festive',
    description: 'Artisan embroidered motifs on pure breathable rayon fabric with side slits and delicate lace trim.',
  },
  {
    id: 106,
    image: Image6,
    color: '#64748b',
    colorName: 'Slate Grey',
    title: 'Heavyweight Relaxed Boxy Tee',
    category: 'Mens Wear',
    price: 36.0,
    originalPrice: 50.0,
    rating: 4.5,
    reviews: 73,
    badge: 'New',
    description: 'Thick 240 GSM cotton knit with dropped shoulders and a modern boxy silhouette.',
  },
  {
    id: 107,
    image: Image7,
    color: '#b45309',
    colorName: 'Warm Amber',
    title: 'Autumn Oversized Corduroy Overshirt',
    category: 'Jackets',
    price: 59.99,
    originalPrice: 85.0,
    rating: 4.7,
    reviews: 95,
    badge: 'Autumn Drop',
    description: 'Plush wide-wale corduroy with custom antique brass snaps, dual chest flap pockets, and relaxed fit.',
  },
  {
    id: 108,
    image: Image8,
    color: '#0f766e',
    colorName: 'Deep Pine',
    title: 'Contemporary Floral Festive Tunic',
    category: 'Women Ethnic',
    price: 54.0,
    originalPrice: 79.0,
    rating: 4.9,
    reviews: 138,
    badge: 'Limited',
    description: 'Lustrous silk-blend tunic tailored with intricate neckline embroidery and flowy side panel drape.',
  },
  {
    id: 109,
    image: Image9,
    color: '#334155',
    colorName: 'Charcoal Black',
    title: 'Performance Stretch Chino Jacket',
    category: 'Jackets',
    price: 74.99,
    originalPrice: 110.0,
    rating: 4.8,
    reviews: 182,
    badge: 'Premium',
    description: 'Four-way stretch twill blend that moves with you from city commutes to casual weekend dinner dates.',
  },
];

const categories = ['All', 'Mens Wear', 'Women Ethnic', 'Jackets', 'Trending'];

const Products = () => {
  const {
    addToCart,
    setQuickViewProduct,
    searchTerm,
    selectedCategory,
    setSelectedCategory,
  } = useCart();

  const [showAll, setShowAll] = useState(false);
  const [addedItemIds, setAddedItemIds] = useState([]);
  const filteredProducts = useMemo(() => {
    return ProductsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        (selectedCategory === "Kids Wear" ? item.category === "Mens Wear" : item.category === selectedCategory);

      const matchesSearch =
        searchTerm.trim() === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.colorName.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 5);

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    addToCart(product, 1, 'M');
    setAddedItemIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedItemIds((prev) => prev.filter((id) => id !== product.id));
    }, 1500);
  };

  return (
    <section id="products" className="py-14 sm:py-20 bg-gray-50/50 dark:bg-gray-900/40 transition-colors">
      <div className="container">
        <div className="text-center mb-10 max-w-[650px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-bold uppercase tracking-wider text-primary">
            Curated For You
          </p>
          <h2 data-aos="fade-up" data-aos-delay="50" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Featured Collections
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
            Explore top-selling seasonal fashion, meticulously tailored with premium textiles, modern fits, and everyday durability.
          </p>
          <div data-aos="fade-up" data-aos-delay="150" className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/30 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {searchTerm && (
            <p className="text-xs text-gray-500 mt-3">
              Showing search results for: <span className="font-bold text-primary">&quot;{searchTerm}&quot;</span> (
              {filteredProducts.length} items found)
            </p>
          )}
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-800 p-8">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200">No matching products found</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Try adjusting your search criteria or explore other categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold cursor-pointer hover:opacity-90"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayedProducts.map((data, index) => {
              const isAdded = addedItemIds.includes(data.id);

              return (
                <div
                  key={data.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  data-aos-duration="500"
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                  onClick={() => setQuickViewProduct(data)}
                >
                  {data.badge && (
                    <span className="absolute top-3 left-3 z-10 text-[10px] uppercase font-extrabold tracking-wider bg-gray-900/80 dark:bg-primary/90 text-white px-2 py-0.5 rounded-md shadow-xs backdrop-blur-xs">
                      {data.badge}
                    </span>
                  )}

                  <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(data);
                      }}
                      className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white shadow-md hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      title="Quick View"
                    >
                      <FaEye className="text-xs" />
                    </button>
                  </div>
                  <div className="relative h-[220px] w-full flex items-center justify-center rounded-xl bg-gray-50/80 dark:bg-gray-900/60 p-2 overflow-hidden mb-3">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="h-full w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

              
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wide">
                        {data.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-semibold">
                        <FaStar className="text-[11px]" />
                        <span className="text-xs">{data.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                      {data.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span
                        className="w-3 h-3 rounded-full border border-gray-300 dark:border-gray-600 shrink-0"
                        style={{ backgroundColor: data.color }}
                        title={data.colorName}
                      />
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                        {data.colorName}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                      <div>
                        <span className="text-base font-extrabold text-gray-900 dark:text-white">
                          ${data.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-1.5">
                          ${data.originalPrice.toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleQuickAdd(data, e)}
                        className={`p-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                          isAdded
                            ? 'bg-emerald-500 text-white'
                            : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                        }`}
                        title="Add to Bag"
                      >
                        {isAdded ? <FaCheck className="text-xs" /> : <FaShoppingBag className="text-xs" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {filteredProducts.length > 5 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm hover:scale-105 active:scale-95 duration-200 shadow-md shadow-primary/25 cursor-pointer"
            >
              {showAll ? 'Show Fewer Products' : `View All Products (${filteredProducts.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;