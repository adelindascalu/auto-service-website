import "./ServicesList.css";

import service01 from "../../assets/images/ServicesImages/service01.jpg";
import service02 from "../../assets/images/ServicesImages/project-n-05.jpg";
import service03 from "../../assets/images/ServicesImages/service03.jpg";
import service04 from "../../assets/images/ServicesImages/service04.jpg";
import ServiceCard from "../Reusable-components/ServiceCard/ServiceCard";

export default function ServicesList() {
  return (
    <>
      <section className='services-section'>
        <div className='container'>
          <h2 className='heading-primary services-heading'>Services</h2>
        </div>

        <div className='container services-container'>
          <ServiceCard src={service02} title='Engine Repairs' />
          <ServiceCard src={service02} title='Oil Change' />
          <ServiceCard src={service02} title='Transmission Repairs' />
          <ServiceCard src={service02} title='Electrical Repairs' />
          <ServiceCard src={service02} title='Auto diagnosis' />
          <ServiceCard src={service02} title='A/C Repairs' />
        </div>
      </section>
    </>
  );
}
