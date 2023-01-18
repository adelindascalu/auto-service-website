import { Link } from "react-router-dom";
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
          <Link className='btn-light hero-btn' to='/about'>
            Find out more
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
