import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row items-center lg:itmes-start h-screen px-4 lg:px16">
<div className="w-full lg:w-1/2 text-center mt-12 lg:mt-32 lg:text-left ">
<h1 className="text-[24px] sm:text-[28px] lg:text-[40px] text-[#00000] font-bold font-bodoni xl:h-[189px]">
IMPECCABLE CRAFTSMANSHIP AND FINESSE
</h1>
<p className="text-[16px] sm:text-[18px] lg:text-[24px] text-[#A29875] font-bodoni xl:text-[30px] leading-relaxed  ">
An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
</p>
<button className="bg-[#A29875] py-2 px-8 sm:px-10 text-[#fffff] font-bodoni transition duration-300 ease-linear ">
Explore Now
</button>
</div>
<Image
src="/girl.jpg" 
alt="girl"
height={700}
width={400}
className='max-w-full sm:max-w-[350px] lg:mx-w-[400px] h-auto transition duration-300 object-contain ease-in-out '
/>
        </div>
      
    </div>
  )
}

export default Hero
