import Steps from "../components/HomePageComponents/Steps";
import HeroSection from "../components/HomePageComponents/HeroSection";
import Reasons from "../components/HomePageComponents/Reasons";
import ServicesMenu from "../components/HomePageComponents/ServicesMenu";
import FAQSection from "../components/HomePageComponents/FAQSection";
import Testimonials from "../components/HomePageComponents/TestimonialsSection";
import CtaForm from "../components/HomePageComponents/CtaForm";
import PopUp from "../components/Reusable-components/RequestButton/RequestButton";

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesMenu />
      <Steps />
      <Reasons />
      <FAQSection />
      <Testimonials />
      <CtaForm />
    </div>
  );
}

export default Home;
