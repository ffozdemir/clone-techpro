import "./App.scss";
import { Blogs } from "./components/Blogs/Blogs";
import { Companies } from "./components/Companies/Companies";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CarouselHero } from "./components/Hero/CarouselHero";
import { Programs } from "./components/Programs/Programs";
import { Testimonials } from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <CarouselHero />
      <Programs />
      <Testimonials />
      <Companies />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
