import { footerData } from "../../constants";
import Container from "../layout/Container";

const Footer = () => {
  return (
    <div className="bg-[url('/footer.jpeg')] relative bg-center bg-cover bg-no-repeat lg:h-[590px]">
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <Container className={"relative z-20"}>
        <div className='py-20'>
          <h2 className='text-white text-center font-bebas uppercase text-[40px] lg:text-6xl leading-[48px]'>
            We ready to have you the best dining experiences
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10'>
            {footerData.map((item) => (
              <div
                key={item.id}
                className='flex flex-col items-center justify-center'
              >
                <img
                  className='w-[30px] h-[30px]'
                  src={item.icon}
                  alt='clock'
                />
                <h3 className='mt-6 text-white text-2xl font-bold font-bebas leading-7 tracking-[3px]'>
                  {item.title}
                </h3>
                <p className='mt-2 text-[#F7F8F9] leading-[25px]'>
                  {item.desc1}
                </p>
                <p className='text-[#F7F8F9] leading-[25px]'>{item.desc2}</p>
              </div>
            ))}
          </div>

          <div className='flex flex-col items-center justify-between mt-20'>
            <div className='flex items-center gap-5'>
              <a
                href='#'
                className='inline-block border-2 border-white p-3 rounded-full'
              >
                <img className='w-6 h-6' src='/facebook.png' alt='facebook' />
              </a>
              <a
                href='#'
                className='inline-block border-2 border-white p-3 rounded-full'
              >
                <img className='w-6 h-6' src='/twitter.png' alt='twitter' />
              </a>
              <a
                href='#'
                className='inline-block border-2 border-white p-3 rounded-full'
              >
                <img className='w-6 h-6' src='/instagram.png' alt='instagram' />
              </a>
              <a
                href='#'
                className='inline-block border-2 border-white p-3 rounded-full'
              >
                <img className='w-6 h-6' src='/linkedin.png' alt='linkedin' />
              </a>
            </div>

            <p className='mt-5 text-base lg:text-[21px] text-white leading-6 font-roboto'>
              © 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
