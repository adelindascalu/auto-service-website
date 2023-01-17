import { Link } from "react-router-dom";
import Button from "../Reusable-components/Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div>
      <section className='hero-section'>
        <div className='hero-container'>
          <h1 className='heading-primary'>Professional auto service</h1>
          <p className='hero-text'>
            Your car is vital to you, so we provide essential and affordable
            services to ensure you stay on the roads
          </p>
          <Link to='/about'>
            <Button type='btn-light' text='Find out more'></Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;