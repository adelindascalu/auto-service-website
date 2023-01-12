import "./Button.css";

export default function Button(props) {
  const { type, form, onClick, disabled } = props;

  return (
    <div>
      <button
        className={type}
        form={form}
        onClick={onClick}
        disabled={disabled}
      >
        {props.text}
      </button>
    </div>
  );
}
