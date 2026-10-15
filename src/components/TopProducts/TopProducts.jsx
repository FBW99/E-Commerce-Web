import React from 'react'
import Image2 from "../../assets/T-shirt/img2.png";
import Image3 from "../../assets/T-shirt/img3.png";
import Image4 from "../../assets/T-shirt/img4.png";
import Image5 from "../../assets/T-shirt/img5.png";
import { FaStar } from "react-icons/fa";    

const ProductsData = [

    {
        id:2,
        image:Image2,
        color:"orange",
        title:"Printed T-Shirt",
        rating:4.2,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        id:3,
        image:Image3,
        color:"green",
        title:"Fashion T-Shirt",
        rating:4.2,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        id:4,
        image:Image4,
        color:"red",
        title:"Fashion T-Shirt",
        rating:4.2,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        id:5,
        image:Image5,
        color:"pink",
        title:"Brand T-Shirt",
        rating:4.2,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing",
    },
]
const TopProducts = () => {
  return (
    <div>
        <div className="container">
            <div className='text-left mb-24'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos="fade-up" className='text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Repellat sit ratione, obcaecati assumenda 
                quasi distinctio ipsam, esse minima veritatis dolore
                ut. Expedita molestiae doloribus recusandae a qui
                 aspernatur corrupti quod.
            </p>
        </div>  
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20 place-items-center'>
            {
                ProductsData.map((data) => (
                    <div
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                    hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                        <div className='h-[100px]'>
                            <img
                                src={data.image}
                                alt=""
                                className="max-w-[140px] block mx-auto mt-6 transform -translate-y-20
                                group-hover:scale-120 duration-300 drop-shadow-md"
                            />
                        </div>
                        <div className='p-4 text-center'>
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h3 className='text-xl font-bold'>{data.title}</h3>
                            <p className='text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                            <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary '>
                                Order Now
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
       </div>
    </div>
  )
}

export default TopProducts