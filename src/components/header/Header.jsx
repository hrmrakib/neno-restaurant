import Container from "../layout/Container";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className='bg-[#c4342b] h-screen'>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
};

export default Header;
