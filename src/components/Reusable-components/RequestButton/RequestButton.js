import { useState } from "react";
import Button from "../Button/Button";
import "./RequestButton.css";

export default function RequestButton(props) {
  const { disabled } = props;
  const [request, sendRequest] = useState(false);
  const toggleRequest = () => sendRequest(!request);

  return (
    <div>
      <Button
        type='btn-light btn-send'
        form='cta-form'
        text='Book Now'
        onClick={toggleRequest}
        disabled={disabled}
      />
      {request && (
        <div className='popup-container'>
          <div className='overlay' onClick={toggleRequest}></div>
          <div className='popup-content'>
            <h2>Your request has been sent!</h2>
            <p>
              You will be contacted by an operator in case any more details are
              needed.
            </p>
            <Button type='btn-light' text='Close' onClick={toggleRequest} />
          </div>
        </div>
      )}
    </div>
  );
}
