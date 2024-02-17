import About from "./About";
import Carousel from "./Carousel";
import RoomCarousel from "./RoomCarousel";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <About />
      <RoomCarousel />
      <Services />
    </div>
  );
};

export default HomePage;
