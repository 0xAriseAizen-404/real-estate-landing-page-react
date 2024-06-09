import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Slider } from "./components/Slider";
import { Accordination } from "./components/Accordination";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { GetStarted } from "./components/GetStarted";
import { CompanyLogos } from "./components/CompanyLogos";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CompanyLogos />
      <Slider />
      <Accordination />
      <ContactUs />
      <GetStarted />
      <Footer />
    </>
  );
}
