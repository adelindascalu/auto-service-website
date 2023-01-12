import "./FAQSection.css";
import Accordion from "./Reusable-components/Accordion/Accordion";

function FAQSection() {
  return (
    <div>
      <div className='questions-section'>
        <h2 className='heading-secondary'>Frequently asked questions</h2>
        <div className='questions container'>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
