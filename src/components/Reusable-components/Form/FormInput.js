export default function FormInput(props) {
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  return (
    <div>
      <label htmlFor='first-name'>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
}
