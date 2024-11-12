import { footerData } from "../../constants";
import Container from "../layout/Container";

const Footer = () => {
  return (
    <div className="bg-[url('/footer.jpeg')] relative bg-center bg-cover bg-no-repeat h-[690px]">
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <Container className={"relative z-20"}>
        <div className='py-20'>
          <h2 className='text-white text-center font-bebas uppercase text-6xl'>
            We ready to have you the best dining experiences
          </h2>

          <div className='grid grid-cols-4 gap-5 mt-10'>
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
                <h3 className='mt-6 text-white text-2xl font-bold font-bebas tracking-widest'>
                  {item.title}
                </h3>
                <p className='mt-2 text-[#F7F8F9] leading-[25px]'>
                  {item.desc1}
                </p>
                <p className='text-[#F7F8F9] leading-[25px]'>{item.desc2}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
