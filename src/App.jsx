import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/home/About";
import BookYourTable from "./components/home/BookYourTable";
import CustomerReviw from "./components/home/CustomerReviw";
import Popular from "./components/home/Popular";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Popular />
      <BookYourTable />
      <CustomerReviw />
      <Footer />
    </div>
  );
};

export default App;
