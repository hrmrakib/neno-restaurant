import Container from "../layout/Container";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className='bg-[#c4342b]'>
      <Container>
        <Navbar />
      </Container>
    </div>
  );
};

export default Header;
