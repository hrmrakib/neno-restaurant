import Button from "../common/Button";

const Hero = () => {
  return (
    <div className='h-[calc(100vh-112px)] flex items-center justify-center'>
      <div className='relative grid grid-cols-2'>
        <div>
          <h1 className='text-white bebas uppercase font-bold text-7xl leading-[100px]'>
            Taste the authentic Saudi cuisine
          </h1>

          <p className='max-w-[550px] mb-6 roboto text-white text-2xl leading-8'>
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.{" "}
          </p>

          <Button>Explore Menu</Button>
        </div>
        <div>
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
