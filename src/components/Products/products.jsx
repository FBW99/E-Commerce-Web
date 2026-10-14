import React from 'react'

const ProductsData =[
    {
      id: 1,
      image: "",
      author: "brown_pen",
      title: "Goggles",
      rating: 4.2,
      aosDelay: "0",
        
    },
    {
      id: 2,
      image: "",
      author: "orange",
      title: "Printed T-shirt",
      rating: 4.2,
      aosDelay: "0",
        
    },
    {
      id: 3,
      image: "",
      author: "green_pen",
      title: "Fashion T-shirt",
      rating: 4.2,
      aosDelay: "0",
        
    },
    {
      id: 4,
      image: "",
      author: "black_pen",
      title: "Wireless Headphone",
      rating: 4.2,
      aosDelay: "0",
        
    },
    {
      id: 5,
      image: "",
      author: "white_pen",
      title: "Women Ethnic",
      rating: 4.2,
      aosDelay: "0",
        
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                    lg:grid-cols-4 gap-10 place-items-center'>
                        {productData.map((item)=>{
                           <div>
                            <img src={item.image}
                             alt="" 
                             className='h-[220px] w-[150px]
                             object-cover rounded-md'/>
                             <div className='py'>
                                <h2 className='text-sm font-semibold'>{item.title}</h2>
                                <p className='text-xs text-gray-500'>{item.author}</p>
                                    
                             </div>

                           </div>
                        })}
        </div>
     </div>
    </div>  
  )
}

export default products