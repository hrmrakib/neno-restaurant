import Button from "../common/Button";

const Navbar = () => {
  return (
    <nav className='h-28 flex items-center justify-between'>
      <ul className='hidden lg:flex items-center gap-12 *:text-white'>
        <li>
          <a href='#' className='flex items-center gap-2'>
            <img src='/logo.png' alt='logo' />
            <h3 className='text-[28px] text-white font-poppins'>Restaurant</h3>
          </a>
        </li>
        <li>
          <a href='#' className='text-[15px] font-medium font-raleway'>
            Home
          </a>
        </li>
        <li>
          <a href='#' className='text-[15px] font-medium font-raleway'>
            About
          </a>
        </li>
        <li>
          <a href='#' className='text-[15px] font-medium font-raleway'>
            Portfolio
          </a>
        </li>
        <li>
          <a href='#' className='text-[15px] font-medium font-raleway'>
            Clients
          </a>
        </li>
        <li>
          <a href='#' className='text-[15px] font-medium font-raleway'>
            Blog
          </a>
        </li>
        <li>
          <a href='#' className='text-[15px] font-medium font-raleway'>
            Contact
          </a>
        </li>
      </ul>

      <Button className='hidden xl:block font-roboto'>Book a Table</Button>

      {/* mobile menu */}
      <div className='lg:hidden w-full flex items-center justify-between'>
        <a href='#' className='flex items-center gap-2'>
          <img src='/logo.png' alt='logo' />
          <h3 className='text-[28px] text-white font-poppins'>Restaurant</h3>
        </a>

        <a href='#'>
          <img className='flex' src='/menu-icon.png' alt='menu' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
