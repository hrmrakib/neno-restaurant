import Container from "../layout/Container";

const BookYourTable = () => {
  return (
    <div className="bg-[url('/book-bg.jpeg')] bg-cover bg-no-repeat">
      <Container>
        <div className='py-20'>
          <p className='flex items-center'>
            <span className='bg-[#BD1F17] w-2 h-2 inline-block mr-2'></span>
            <span className='text-[#BD1F17] text-xl font-bold leading-8'>
              Book Now
            </span>
          </p>

          <h2 className='text-white text-6xl leading-[62px] font-bebas'>
            Book Your Table
          </h2>
          <p className='max-w-[520px] text-[#F7F8F9] font-roboto leading-6'>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BookYourTable;
