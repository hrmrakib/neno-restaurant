import { useState } from "react";
import Container from "../layout/Container";
import Button from "../common/Button";
import { foodData, tabData } from "../../constants";

const About = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className='bg-white my-20'>
      <Container>
        <div className='grid lg:grid-cols-2 gap-5'>
          <div>
            <img src='/about.png' alt='about' />
          </div>

          <div className='w-full max-w-3xl mx-auto px-4 py-8'>
            <div className='flex border-b-2 border-red-500'>
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full py-2 px-4 font-roboto text-left font-bold text-sm hover:bg-[#B52B1D] hover:text-white ${
                    activeTab === tab.id
                      ? "bg-[#B52B1D] text-white"
                      : "text-black"
                  } `}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div>
              <div>
                <h2 className='text-[32px] font-bold uppercase leading-[40px] my-3'>
                  {tabData.find((tab) => tab.id === activeTab)?.title}
                </h2>
                <p className='text-[#333333] leading-[26px]'>
                  {tabData.find((tab) => tab.id === activeTab)?.content}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3 lg:gap-5 mt-10'>
              <Button className={"px-4"}>About More</Button>
              <div className='flex items-center gap-1 md:gap-2'>
                <img src='/call-alt.png' alt='call' />
                <span className='text-[#0A1425] text-lg font-roboto font-bold'>
                  +966 555 555 555
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='my-16 grid gap-10 grid-cols-1 lg:grid-cols-3 items-center justify-between'>
          {foodData.map((item) => (
            <div key={item.id} className='flex items-center gap-5 lg:gap-3'>
              <div className='w-[70px] h-[70px] md:w-24 md:h-24 shadow-lg rounded-full p-3 flex items-center justify-center'>
                <img className='w-10 h-10' src={item.image} alt={item.title} />
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold bebas uppercase leading-10'>
                  {item.title}
                </h2>
                <p className='text-[#0A1425] text-lg md:text-xl leading-8'>
                  {item.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
