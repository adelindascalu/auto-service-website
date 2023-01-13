import { GiAutoRepair } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { IoRibbonOutline } from "react-icons/io5";
import "./Reasons.css";

function Reasons() {
  return (
    <div>
      <section className='main-section'>
        <div className='container'>
          <div className='main-section-title'>
            <h2 className='heading-secondary'>Why choose us</h2>
            <p className='heading-tertiary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolor aliquam alias explicabo consectetur reprehenderit.
            </p>
          </div>
          <div className='reasons-card'>
            <div className='rc-left'>
              <div className='reason'>
                <h2 className='reason-heading'>
                  <GiAutoRepair className='rc-icon' />
                  Free diagnostics
                </h2>
                <p className='reason-text'>
                  The free test takes less than a minute and you'll get an easy
                  to understand report printed and emailed.
                </p>
              </div>

              <div className='reason'>
                <h2 className='reason-heading'>
                  <BiTimer className='rc-icon' />
                  Fast Repair
                </h2>
                <p className='reason-text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Expedita perferendis aspernatur porro commodi libero quia
                  veritatis debitis praesentium omnis cum?
                </p>
              </div>

              <div className='reason'>
                <h2 className='reason-heading'>
                  <IoRibbonOutline className='rc-icon' />
                  90 days warranty
                </h2>
                <p className='reason-text'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  aliquid velit fugit sed aspernatur similique recusandae animi
                  necessitatibus nesciunt tempora?
                </p>
              </div>
            </div>

            <div className='rc-right'></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reasons;
