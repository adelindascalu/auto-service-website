import "./Contacts.css";
import { GiTowTruck, GiPhone } from "react-icons/gi";
import { RiMapPinLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function Contacts() {
  return (
    <>
      <section className='contacts-section'>
        <div className='container'>
          <h2 className='heading-primary contacts-heading'>Contact us</h2>
          <div className='contacts-container'>
            <div className='contact'>
              <IoMdInformationCircleOutline className='contact-icon'></IoMdInformationCircleOutline>
              <p>
                2285 Driftwood Road
                <br /> Los Gatos, California
              </p>
            </div>
            <div className='contact'>
              <GiPhone className='contact-icon'></GiPhone>
              <p>
                Phone: 408-357-7676
                <br />
                hello@axdservice.com
              </p>
            </div>
            <div className='contact'>
              <AiOutlineClockCircle className='contact-icon'></AiOutlineClockCircle>
              <p>
                Mo-Sa: 07:00 - 22:00
                <br />
                Su: 08:00 - 16:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
