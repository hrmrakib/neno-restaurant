import { useState } from "react";
import Container from "../layout/Container";

const tabData = [
  {
    id: "tab1",
    name: "About",
    title: "Exceptional culinary experience and delicious food",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
  },
  {
    id: "tab2",
    name: "Experience",
    title: "Exceptional taughible experience and delicious food",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
  },
  {
    id: "tab3",
    name: "Contact",
    title: "Exceptional culinary experience and delicious food",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className='bg-white my-20'>
      <Container>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <img src='/about.png' alt='about' />
          </div>

          <div className='w-full max-w-3xl mx-auto px-4 py-8'>
            <div className='flex border-b-2 border-red-500'>
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full py-2 px-4 roboto text-left font-bold text-sm hover:bg-[#B52B1D] hover:text-white ${
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
