import "./App.scss";
import { Header } from "./components/Header/Header";
import { CarouselHero } from "./components/Hero/CarouselHero";
import { Programs } from "./components/Programs/Programs";

function App() {
  return (
    <>
      <Header />
      <CarouselHero />
      <Programs />
    </>
  );
}

export default App;
