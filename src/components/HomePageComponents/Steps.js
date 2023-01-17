import "./Steps.css";

function Steps() {
  return (
    <div>
      <section className='section-steps'>
        <div className='container'>
          <h2 className='heading-secondary'>
            Life's too short to worry about a broken car
          </h2>
          <p className='heading-tertiary'>
            Enjoy convenient car repair and maintenance. It's as easy as 1-2-3.
          </p>
        </div>

        <div className='steps container'>
          <div className='step'>
            <span className='step-number'>01</span>
            <h3 className='step-text'>Get a quote</h3>
            <p className='step-description'>
              Receive a free, fast, fair & transparent price quote based on your
              car's needs or diagnostic.
            </p>
          </div>

          <div className='step'>
            <span className='step-number'>02</span>
            <h3 className='step-text'>Book appointment</h3>
            <p className='step-description'>
              Provide your details and preffered date for an appointment.
            </p>
          </div>

          <div className='step'>
            <span className='step-number'>03</span>
            <h3 className='step-text'>Get your car fixed</h3>
            <p className='step-description'>
              That's it. We'll get your car fixed in no time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;
