import "./Accordion.css";
import { useState } from "react";

export default function Accordion(props) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      {Data.map((item, i) => (
        <div className='accordion' key={i} onClick={() => toggle(i)}>
          <div className='accordion-title'>
            <h2>{item.question}</h2>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Data = [
  {
    question: "How often should I get an oil change?",
    answer:
      "The consensus agrees that a driver should get an oil change every 3,000 to 7,000 miles or every three months. However, you can always refer to your owner's manual which covers the recommended oil change interval for your specific make and model.",
  },
  {
    question: "How often should I check my vehicle's fluid levels?",
    answer:
      "Aside from engine oil, there are many other fluids that are vital to the health of your vehicle. Some examples include the transmission fluid, brake fluid, engine coolant, and power-steering fluid. Their levels are not only affected by how frequently you drive but extreme temperatures as well. As such, specialists advise checking them at the same time as your oil change or every month or two.",
  },
  {
    question: "When should I replace my brake pads?",
    answer:
      "On average, brake pads begin to wear out around the 20,000- to 30,000-mile mark, but there are many factors that may impact this figure. Knowing what signs to look out for will therefore prove instrumental in detecting when your brake pads need to be replaced. If you feel your vehicle taking longer to come to a stop or notice a high-pitch screeching or grinding noise when braking, scheduling a checkup is integral. ",
  },
  {
    question: "How often should I replace my car battery?",
    answer:
      "The standard battery is projected to last three to five years, but variables like hot and cold weather can influence its longevity, so it is best to keep an eye out for signs your battery power is declining. If your headlights and dashboard lights are starting to dim or if your vehicle has difficulty starting, these are clues that your vehicle may be due for a battery replacement.",
  },
];

// const Accordion = ({ data }) => {
//   const [selected, setSelected] = useState(null);

//   const toggle = (i) => {
//     if (selected === i) {
//       return setSelected(null);
//     }
//     setSelected(i);
//   };
//   return (
//     <div className='accordion'>
//       {data.map((item, i) => (
//         <div className='item' key={i}>
//           <div className='title' onClick={() => toggle(i)}>
//             <span className='arrow'>{selected === i ? "-" : "+"}</span>
//             <h2>{item.question}</h2>
//           </div>
//           <div className={selected === i ? "content show" : "content"}>
//             <h2>{item.answer}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Accordion;
