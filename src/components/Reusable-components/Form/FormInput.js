import { useState } from "react";

export default function FormInput(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <label htmlFor='first-name'>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        focused={focused.toString()}
        onBlur={handleFocus}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
