import Steps from "../components/Steps";
import HeroSection from "../components/HeroSection";
import Reasons from "../components/Reasons";
import ServicesMenu from "../components/ServicesMenu";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/TestimonialsSection";
import CtaForm from "../components/CtaForm";
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
