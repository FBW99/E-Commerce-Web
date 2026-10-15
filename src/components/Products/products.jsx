import React from 'react'
import Image1 from "../../assets/Men/images1.png";
import Image2 from "../../assets/Men/imag2.png";
import Image3 from "../../assets/Men/imag3.png";
import Image4 from "../../assets/Men/imag4.png";
import Image5 from "../../assets/Men/imag5.png";
import { FaStar } from "react-icons/fa";

const ProductsData =[
    {
      id: 1,
      image: Image1,
      color: "blue",
      title: "T-shirts",
      rating: 4.2,
        
    },
    {
      id: 2,
      image: Image2,
      color: "teal",
      title: "Printed T-shirt",
      rating: 4.2,
        
    },
    {
      id: 3,
      image: Image3,
      color:"peach",
      title: "Fashion T-shirt",
      rating: 4.2,
        
    },
    {
      id: 4,
      image: Image4,
      color: "olive",
      title: "Fashion Jacket",
      rating: 4.2,
        
    },
    {
      id: 5,
      image: Image5,
      color: "navy",
      title: "Women Ethnic",
      rating: 4.2,       
    },
]
const products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 className='text-3xl font-bold'>Products</h1>
            <p className='text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Repellat sit ratione, obcaecati assumenda 
                quasi distinctio ipsam, esse minima veritatis dolore
                ut. Expedita molestiae doloribus recusandae a qui
                 aspernatur corrupti quod.
            </p>
    </div>  
    <div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 place-items-center">
        {ProductsData.map((data) => (
          
          <div
            key={data.id}
            className="rounded-md p-3 relative overflow-hidden"
            style={{backgroundColor:data.color}} 
             data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500" 
          >
            <img  
              src={data.image}
              alt={data.title}
              className="h-[220px] w-[150px] object-cover rounded-md"
            />

            <h3 className="font-semibold text-sm mt-2 text-center">
              {data.title}
            </h3>

            <p className="text-sm text-gray-900 text-center">
              {data.color}
            </p> 

            <div className="flex items-center justify-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="text-sm">{data.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>  
  )
}

export default products