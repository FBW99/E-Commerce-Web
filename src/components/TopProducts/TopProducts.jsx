import React from 'react';
import Image1 from '../../assets/T-shirt/img1.png';
import Image2 from '../../assets/T-shirt/img2.png';
import Image3 from '../../assets/T-shirt/img3.png';
import Image4 from '../../assets/T-shirt/img4.png';
import Image5 from '../../assets/T-shirt/img5.png';
import { FaStar, FaBolt } from 'react-icons/fa';
import { useCart } from '../../context/useCart';

const ProductsData = [
  {
    id: 201,
    image: Image1,
    color: 'Slate',
    title: 'Casual Streetwear Tee',
    rating: 4.9,
    reviews: 184,
    price: 29.99,
    description: 'Lightweight jersey knit made with combed ringspun cotton for unmatched comfort.',
  },
  {
    id: 202,
    image: Image2,
    color: 'Amber Gold',
    title: 'Printed Sunset Tee',
    rating: 5.0,
    reviews: 245,
    price: 34.99,
    description: 'Vibrant screen-printed graphics on pre-shrunk cotton with durable double-needle stitching.',
  },
  {
    id: 203,
    image: Image3,
    color: 'Forest Emerald',
    title: 'Fashion Vintage Tee',
    rating: 4.8,
    reviews: 160,
    price: 32.99,
    description: 'Soft mineral-washed finish with a relaxed drape and comfortable ribbed crew neck.',
  },
  {
    id: 204,
    image: Image4,
    color: 'Crimson Red',
    title: 'Signature Sport Tee',
    rating: 4.9,
    reviews: 210,
    price: 36.99,
    description: 'Moisture-wicking athletic fit engineered to keep you cool from workout to weekend.',
  },
  {
    id: 205,
    image: Image5,
    color: 'Soft Blossom',
    title: 'Signature Brand Tee',
    rating: 4.8,
    reviews: 139,
    price: 38.99,
    description: 'Our flagship modern cut tee boasting an ultra-soft feel and embroidered chest insignia.',
  },
];

const TopProducts = () => {
  const { openOrderModal, setQuickViewProduct } = useCart();

  return (
    <section id="top-rated" className="py-14 sm:py-24 transition-colors">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-24 max-w-[620px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-bold uppercase tracking-wider text-primary">
            Customer Favorites
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Top Rated T-Shirts
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
            Loved by thousands of style enthusiasts. Designed with reinforced stitching, timeless silhouettes, and fade-resistant colorways.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-20 gap-x-6 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              className="rounded-3xl bg-white dark:bg-gray-800 hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-950 dark:hover:from-gray-800 dark:hover:to-gray-900 hover:text-white relative shadow-lg hover:shadow-2xl duration-300 group w-full max-w-[280px] pt-4 pb-6 px-4 border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between"
            >
   
              <div className="h-[100px] flex items-center justify-center">
                <img
                  src={data.image}
                  alt={data.title}
                  onClick={() => setQuickViewProduct(data)}
                  className="max-w-[140px] max-h-[160px] object-contain block mx-auto transform -translate-y-16 group-hover:scale-115 duration-300 drop-shadow-[0_12px_16px_rgba(0,0,0,0.2)] cursor-pointer"
                />
              </div>
              <div className="p-2 text-center flex flex-col items-center">
        
                <div className="w-full flex items-center justify-center gap-1 text-amber-400 text-xs mb-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-xs text-gray-500 group-hover:text-amber-300 ml-1 font-bold">
                    ({data.rating})
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white line-clamp-1 mb-1">
                  {data.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-300 duration-300 line-clamp-2 mb-3">
                  {data.description}
                </p>

                <div className="text-base font-extrabold text-primary group-hover:text-secondary mb-3">
                  ${data.price.toFixed(2)}
                </div>

                <button
                  onClick={() => openOrderModal(data)}
                  className="w-full py-2 px-4 rounded-full bg-primary text-white font-semibold text-xs tracking-wide group-hover:bg-white group-hover:text-gray-900 hover:scale-105 duration-200 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FaBolt className="text-[11px]" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;