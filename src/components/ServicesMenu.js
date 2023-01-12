import { TbEngine, TbSnowflake, TbReportSearch } from "react-icons/tb";
import { FaOilCan } from "react-icons/fa";
import { GiCarBattery, GiGearStickPattern } from "react-icons/gi";

import { Link } from "react-router-dom";

import "./ServicesMenu.css";

function ServicesMenu() {
  return (
    <div>
      <section className='section-services container'>
        <div className='services-heading'>
          <h2 className='heading-secondary'>Our Services</h2>
        </div>
        <div className='services'>
          <div className='service service-no-border'>
            <TbEngine className='service-icon' />
            <h2 className='service-heading'>Engine Repairs</h2>
          </div>
          <div className='service'>
            <FaOilCan className='service-icon' />
            <h2 className='service-heading'>Oil Change</h2>
          </div>
          <div className='service'>
            <GiGearStickPattern className='service-icon' />
            <h2 className='service-heading'>Transmission Repairs</h2>
          </div>
          <div className='service service-no-border'>
            <GiCarBattery className='service-icon' />
            <h2 className='service-heading'>Battery and Electrical Repairs</h2>
          </div>
          <div className='service'>
            <TbReportSearch className='service-icon' />
            <h2 className='service-heading'>Auto Diagnosis</h2>
          </div>
          <div className='service'>
            <TbSnowflake className='service-icon' />
            <h2 className='service-heading'>A/C Repairs</h2>
          </div>
        </div>

        <div className='all-services'>
          <Link className='link' to='/services'>
            View More &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesMenu;
