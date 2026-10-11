import React from 'react'
// import Image1 from '/src/assets/lightmode.png';
// import Image2 from '/src/assets/lightmode.png';
// import Image3 from '/src/assets/lightmode.png';
// const ImageList = [
//   {
//     id: 1,
//     img: Image1,
//     title: "Upto 50% off on all Men's Wear",
//     description:
//       "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: Image2,
//     title: "Upto 50% off on all Men's Wear",
//     description:
//       "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Image3,
//     title: "Upto 50% off on all Men's Wear",
//     description:
//       "Lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

const Hero = () => {
  return (
    <div>
        <div className='h-[700px] w-[700px] bg-primary/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
        </div>
        <div className='container pb-8 sm:pb-0'>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div>
                <h1>Lorem ipsum dolor sit.</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Commodi eaque ex voluptate animi, vel architecto iure.
                      Repellendus perspiciatis facilis iste deleniti reprehenderit 
                      illum officiis expedita quo dignissimos rerum, numquam nisi.
                </p>
                <div>
                    <button className='bg-gradient-to-r from-primary
                     to-secondary hover:scale-105
                     duration-200 text-white py-2 px-4 rounded-full'>
                        Order Now
                     </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero