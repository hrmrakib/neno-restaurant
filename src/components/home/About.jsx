import { useState } from "react";

const tabData = [
  {
    id: "tab1",
    title: "Our Story",
    content:
      "Founded in 2010, our restaurant has been serving authentic cuisine for over a decade. We pride ourselves on using only the freshest, locally-sourced ingredients in all our dishes.",
  },
  {
    id: "tab2",
    title: "Our Menu",
    content:
      "Our menu features a wide variety of dishes, from traditional favorites to modern fusion creations. We offer options for all dietary needs, including vegetarian, vegan, and gluten-free choices.",
  },
  {
    id: "tab3",
    title: "Reservations",
    content:
      "To ensure the best dining experience, we recommend making a reservation. You can book a table online through our website or by calling us directly. We look forward to serving you!",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <img src='/about.png' alt='about' />
      </div>

      <div></div>
    </div>
  );
};

export default About;
