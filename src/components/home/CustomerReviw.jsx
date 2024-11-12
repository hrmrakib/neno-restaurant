import Container from "../layout/Container";

const CustomerReviw = () => {
  return (
    <div className='bg-white py-20'>
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
              What Some of my Customers Say
            </h2>
          </div>

          <div className='flex items-start gap-12'>
            <div className='bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center p-2 shadow-lg cursor-pointer'>
              <img className='' src='/left-arrow.png' alt='left' />
            </div>
            <div className='bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center p-2 shadow-lg cursor-pointer'>
              <img className='' src='/right-arrow.png' alt='right' />
            </div>
          </div>
        </div>

        <div className='mt-10 grid grid-cols-5'>
          <div className='col-span-2 bg-[#FEBF00] p-16'>
            <p className='text-xl font-roboto leading-[34px]'>
              You can't go wrong with Chicken Mandi, I had it twice. The chicken
              was cooked perfectly, juicy & soft (usually mandi chicken is a bit
              dry). I would defiantly recommend it.
            </p>

            <div className='flex items-center justify-between border-b-2 border-[#0A1425] pb-4'>
              <div>
                <h3 className='text-lg font-bold font-bebas leading-5 tracking-wide'>
                  Khalid Al Dawsry
                </h3>
                <span className='text-sm leading-3'>Jeddah, Saudi</span>
              </div>
              <img src='/customer.png' alt='customer' />
            </div>
          </div>

          <div className='col-span-3'>
            <img
              className='w-full cursor-pointer'
              src='/video.png'
              alt='review'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviw;
