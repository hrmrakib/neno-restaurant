import Button from "../common/Button";

const Hero = () => {
  return (
    <div className='min-h-[calc(100vh-112px)] flex items-center justify-center'>
      <div className='relative grid lg:grid-cols-2 pb-12 lg:pb-0'>
        <div>
          <h1 className='text-white bebas uppercase font-bold text-3xl lg:text-7xl leading-10 lg:leading-[100px]'>
            Taste the authentic Saudi cuisine
          </h1>

          <p className='max-w-[550px] mt-4 mb-6 roboto text-white text-xl lg:text-2xl leading-7 lg:leading-8'>
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>

          <Button>Explore Menu</Button>
        </div>
        <div className='mt-10 lg:mt-0'>
          <img
            className='w-[700px] max-h-96 object-cover'
            src='/hero-img.png'
            alt='hero-img'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
