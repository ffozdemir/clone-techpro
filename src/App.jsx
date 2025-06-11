import "./App.scss";
import { Companies } from "./components/Companies/Companies";
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
    </>
  );
}

export default App;
