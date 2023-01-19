import "./ServiceCard.css";

export default function ServiceCard(props) {
  const { src, alt, title } = props;
  return (
    <>
      <div className='service-container'>
        <div className='service-img-box'>
          <img className='service-img' src={src} alt={alt}></img>
        </div>
        <div className='service-text-box'>
          <h3 className='service-title' to='/'>
            {title}
          </h3>
        </div>
      </div>
    </>
  );
}
