import React from 'react';
import Image1 from '../../assets/Hero/image1.png';
import Image22 from '../../assets/Hero/image22.png';
import Image3 from '../../assets/Hero/image3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCart } from '../../context/useCart';
import { FaBagShopping, FaFire } from 'react-icons/fa6';

const ImageList = [
  {
    id: 1,
    img: Image1,
    tag: 'Trending Now',
    title: "Up to 50% Off On All Men's Wear",
    description:
      'Elevate your everyday wardrobe with our handpicked cotton tees, tailored jackets, and versatile streetwear essentials built for all-day comfort.',
    price: 39.99,
  },
  {
    id: 2,
    img: Image22,
    tag: 'Exclusive Drop',
    title: 'Up to 40% Off Modern Urban Styles',
    description:
      'Discover contemporary fashion silhouettes made from ultra-soft, sustainable fabrics designed to turn heads wherever you go.',
    price: 45.99,
  },
  {
    id: 3,
    img: Image3,
    tag: 'Mega Clearance',
    title: "Up to 70% Off Women's Collection",
    description:
      'From chic casual daywear to stunning statement evening ensembles, uncover timeless trends at unbeatable limited-time prices.',
    price: 54.99,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  pauseOnHover: true,
  arrows: false,
};

const SliderComponent = Slider?.default ?? Slider;

const Hero = () => {
  const { openOrderModal } = useCart();

  const handleScrollToProducts = () => {
    const section = document.querySelector('#products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-[580px] sm:min-h-[660px] bg-gradient-to-b from-gray-50 to-gray-100/60 flex justify-center items-center dark:from-gray-950 dark:to-gray-900 dark:text-white transition-colors">
      <div className="absolute -top-1/2 right-0 h-[720px] w-[720px] rotate-45 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/20 blur-2xl -z-0 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl -z-0 pointer-events-none" />

      <div className="container pb-12 sm:pb-8 relative z-10">
        <SliderComponent {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">

                <div className="order-2 sm:order-1 flex flex-col justify-center gap-4 text-center sm:text-left pt-4 sm:pt-0">
                  <div
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="flex items-center justify-center sm:justify-start gap-2"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-primary/20 text-secondary dark:text-primary border border-primary/30">
                      <FaFire className="text-secondary" />
                      {data.tag}
                    </span>
                  </div>

                  <h1
                    data-aos="zoom-out"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
                  >
                    {data.title}
                  </h1>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
                  >
                    {data.description}
                  </p>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2"
                  >
                    <button
                      onClick={() =>
                        openOrderModal({
                          id: data.id,
                          title: data.title,
                          img: data.img,
                          price: data.price,
                        })
                      }
                      className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-white font-semibold text-sm shadow-lg shadow-primary/30 duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                      <FaBagShopping />
                      <span>Order Now</span>
                    </button>

                    <button
                      onClick={handleScrollToProducts}
                      className="rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-gray-700 dark:text-gray-200 font-semibold text-sm duration-200 hover:border-primary hover:text-primary dark:hover:text-primary cursor-pointer hover:bg-white/50 dark:hover:bg-gray-800/50"
                    >
                      Explore Catalog
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div className="relative">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="mx-auto max-h-[360px] sm:max-h-[460px] w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] hover:scale-105 duration-500 transform"
                      data-aos="zoom-in"
                      data-aos-delay="150"
                      data-aos-duration="700"
                      data-aos-once="true"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
    </section>
  );
};

export default Hero;
