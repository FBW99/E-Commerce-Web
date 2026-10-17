import React from 'react';
import Slider from 'react-slick';

import Photo1 from '../../assets/Testimonial/photo1.jpg';
import Photo2 from '../../assets/Testimonial/photo2.webp';
import Photo3 from '../../assets/Testimonial/photo3.jpg';
import Photo4 from '../../assets/Testimonial/photo4.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Verified Buyer • New York',
    image: Photo1,
    rating: 5,
    testi:
      'The fabric quality exceeded all my expectations! The stitching is impeccable and the organic cotton tees fit like a dream even after several laundry cycles.',
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Style Enthusiast • Chicago',
    image: Photo2,
    rating: 5,
    testi:
      'Fast shipping and packaging that felt truly high-end. The bomber jacket has quickly become my go-to piece for night outings and chilly mornings.',
  },
  {
    id: 3,
    name: 'David Rodriguez',
    role: 'Verified Buyer • Austin',
    image: Photo3,
    rating: 5,
    testi:
      'Outstanding customer service! Had to exchange sizes and their support team resolved it within 24 hours. The fit and colors are 100% accurate to photos.',
  },
  {
    id: 4,
    name: 'Elena Rostova',
    role: 'Fashion Designer • Seattle',
    image: Photo4,
    rating: 5,
    testi:
      'As someone in the garment industry, I pay attention to fabric weight and seams. MyShops offers luxury-brand craftsmanship at accessible prices.',
  },
];

const SliderComponent = Slider?.default ?? Slider;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gray-50/50 dark:bg-gray-900/30 transition-colors">
      <div className="container">

        <div className="mx-auto mb-14 max-w-[620px] text-center">
          <p data-aos="fade-up" className="text-sm font-bold uppercase tracking-wider text-primary">
            Trusted By 50,000+ Shoppers
          </p>

          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Customer Stories
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Read real feedback from our community of trendsetters who love our contemporary fits, ethical fabrics, and rapid delivery.
          </p>
        </div>
        <div className="mx-auto max-w-6xl pb-4">
          <SliderComponent {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-3 py-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="600"
                  className="flex flex-col justify-between h-[300px] rounded-3xl bg-white dark:bg-gray-800 p-6 sm:p-7 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/60 relative group"
                >
                  <FaQuoteLeft className="text-primary/20 text-3xl absolute top-5 left-5 pointer-events-none group-hover:text-primary/40 transition-colors" />
                  <div className="flex flex-col items-center">
                    <div className="h-18 w-18 overflow-hidden rounded-full ring-4 ring-primary/20 shadow-md mb-3">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                      {[...Array(data.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm italic line-clamp-4 leading-relaxed">
                      &quot;{data.testi}&quot;
                    </p>
                  </div>
                  <div className="border-t border-gray-100 dark:border-gray-700/60 pt-3">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      {data.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </SliderComponent>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;