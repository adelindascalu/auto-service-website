import "./ServiceCard.css";
import { Link } from "react-router-dom";

export default function ServiceCard(props) {
  const { className, src, alt, title } = props;
  return (
    <>
      <div className='service-container'>
        <img className='service-img' src={src} alt={alt}></img>
        <div className='service-text-box'>
          <h3 className='heading-tertiary service-title' to='/'>
            {title} <span>→</span>
          </h3>
        </div>
      </div>
    </>
  );
}
