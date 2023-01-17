import "./AboutUs.css";
import Gallery from "./Gallery";
import Stats from "./Stats";

export default function AboutUs() {
  return (
    <div>
      <section className='about-us-section'>
        <div className='about-us'>
          <h2 className='about-us-title heading-primary'>About Us</h2>
          <p className='about-us-subtitle heading-tertiary'>
            Check. Repair. Maintain. Repeat.
          </p>
        </div>
      </section>

      <section className='story-section'>
        <div className='container'>
          <div className='story'>
            <h2 className='story-heading heading-secondary'>
              About AXD Auto Service
            </h2>
            <p className='story-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              omnis, libero necessitatibus nesciunt adipisci laborum repellendus
              quo rem itaque nulla debitis unde amet dolor ducimus veritatis
              officia fugiat impedit nobis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Commodi hic neque quam a modi
              placeat consequuntur sequi libero similique eaque, sunt qui fuga
              impedit sit? Facere fugiat voluptates beatae assumenda! Delectus,
              facere, tempore voluptate quaerat rem possimus eligendi sunt
              dolorum, repellendus alias dolore optio animi recusandae nihil
              voluptatem reiciendis amet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla quia, rerum beatae architecto delectus rem
              nihil asperiores dignissimos natus assumenda omnis voluptatem
              voluptate, incidunt iste at? Ea totam accusantium ab deleniti
              consequuntur distinctio nihil sapiente dolor. Saepe officia
              sapiente sequi. Temporibus atque facere, ea non vel voluptatum
              consequatur accusamus corrupti.
            </p>
          </div>
        </div>
      </section>

      <section className='stats-section'>
        <div className='container'>
          <Stats />
        </div>
      </section>

      <section className='gallery-section'>
        <h2 className='gallery-section-title heading-secondary'>Gallery</h2>
        <div className='gallery-container'>
          <Gallery />
        </div>
      </section>
    </div>
  );
}
