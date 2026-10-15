import React from 'react'
import Image1 from '/src/assets/Hero/image1.png'
import Image22 from '/src/assets/Hero/image22.png'
import Image3 from '/src/assets/Hero/image3.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 40% off on all Men's Wear",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id:2,
    img: Image22,
    title: "Up to 50% off on all Men's Wear",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id:3,
    img: Image3 ,
    title: "Up to 70% off on all Women's Wear",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
}

const SliderComponent = Slider?.default ?? Slider

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white'>
      <div className='absolute -top-1/2 right-0 h-[700px] w-[700px] rotate-45 rounded-3xl bg-primary/40 -z-10' />
      <div className='container pb-8 sm:pb-0'>
        <SliderComponent {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='order-2 relative z-10 flex flex-col justify-center gap-4 pl-5 pt-12 text-center sm:order-1 sm:pl-0 sm:pt-0 sm:text-left'>
                  <h1 
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  data-aos-duration="500" 
                  data- aos-once="true"  
                  className='text-5xl font-bold sm:text-6xl lg:text-7xl'>
                    {data.title}
                  </h1>
                  <p 
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data- aos-once="true"   
                  className='text-sm'>{data.description}</p>
                  <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  data-aos-duration="500" 
                  data- aos-once="true"   
                  >
                    <button className='rounded-full bg-gradient-to-r
                     from-primary to-secondary px-4 py-2 text-white duration-200 hover:scale-105'>
                      Order Now
                    </button>
                  </div>
                </div>

                <div className='order-1 sm:order-2'>
                  <div className='relative z-10'>
                    <img
                      src={data.img}
                      alt={data.title}
                      className='mx-auto h-[500px] w-[500px] 
                      object-contain sm:h-[450px] sm:scale-125'
                       data-aos="zoom-out"
                      data-aos-delay="100"
                      data-aos-duration="500" 
                      data- aos-once="true"   
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
    </div>
  )
}

export default Hero
