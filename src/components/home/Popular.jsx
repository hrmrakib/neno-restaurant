import React from "react";
import Container from "../layout/Container";
import { foodItem } from "../../constants";

const Popular = () => {
  return (
    <div className='relative py-20 bg-[#FBF7F2]'>
      <Container>
        <div className='flex items-center justify-between'>
          <div>
            <p className='flex items-center'>
              <span className='bg-[#BD1F17] w-2 h-2 inline-block mr-2'></span>
              <span className='text-[#BD1F17] text-xl font-bold leading-8'>
                Crispy, Every Bite Taste
              </span>
            </p>
            <h2 className='mt-5 text-[#181818] text-6xl font-bold leading-10 font-bebas'>
              POPULAR FOOD ITEMS
            </h2>
          </div>

          <div className='flex items-start gap-12'>
            <div className='bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center p-2 cursor-pointer'>
              <img className='' src='/left-arrow.png' alt='left' />
            </div>
            <div className='bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center p-2 cursor-pointer'>
              <img className='' src='/right-arrow.png' alt='right' />
            </div>
          </div>
        </div>

        <div className='my-10 grid grid-cols-4 gap-10'>
          {foodItem.map((item) => (
            <div
              key={item.id}
              className='bg-white py-5 flex flex-col items-center justify-center'
            >
              <img className='w-[120x] h-[120px]' src={item.image} alt='' />
              <span className='bg-[#BD1F17] w-14 h-1 inline-block mr-2'></span>
              <h2 className='mt-8 text-2xl text-[#0A1425] font-bebas font-bold tracking-wider'>
                {item.name}
              </h2>
              <p className='text-[#0A1425] font-roboto leading-8'>
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <img className='absolute top-1/3 left-0' src='/popular.png' alt='' />
    </div>
  );
};

export default Popular;
