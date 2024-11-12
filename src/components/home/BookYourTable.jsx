import Container from "../layout/Container";
import Button from "./../common/Button";

const BookYourTable = () => {
  return (
    <div className="bg-[url('/book-bg.jpeg')] bg-cover bg-no-repeat py-20">
      <Container>
        <div>
          <p className='flex items-center'>
            <span className='bg-[#BD1F17] w-2 h-2 inline-block mr-2'></span>
            <span className='text-[#BD1F17] text-xl font-bold leading-8'>
              Book Now
            </span>
          </p>

          <h2 className='mt-3 text-white text-6xl leading-[62px] font-bebas'>
            Book Your Table
          </h2>
          <p className='max-w-[520px] mt-4 text-[#F7F8F9] font-roboto leading-6'>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        <form className='max-w-[635px] mt-10'>
          <div className='grid grid-cols-2 gap-4'>
            <input
              className='bg-transparent border border-[#E5E7EB] px-4 py-3 placeholder:text-white'
              type='text'
              placeholder='Your Name'
              required
            />
            <input
              className='bg-transparent border border-[#E5E7EB] px-4 py-3 placeholder:text-white'
              type='text'
              placeholder='Your Email'
              required
            />
          </div>
          <div className='mt-6 grid grid-cols-2 gap-4'>
            <input
              className='bg-transparent border border-[#E5E7EB] px-4 py-3 placeholder:text-white'
              type='text'
              placeholder='Your Name'
              required
            />
            <input
              className='bg-transparent border border-[#E5E7EB] px-4 py-3 placeholder:text-white'
              type='text'
              placeholder='Your Email'
              required
            />
          </div>
          <div className='mt-6'>
            <textarea
              className='w-full min-h-36 bg-transparent border border-[#E5E7EB] px-4 py-3 placeholder:text-white'
              name=''
              id=''
              placeholder='Message'
            ></textarea>
          </div>

          <Button className={"mt-6"}>Book Now</Button>
        </form>
      </Container>
    </div>
  );
};

export default BookYourTable;
