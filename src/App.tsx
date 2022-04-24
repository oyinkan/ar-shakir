import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Prefooter from "./components/Prefooter";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Sponsors />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Prefooter />
      <Footer />
    </>
  );
}

export default App;
