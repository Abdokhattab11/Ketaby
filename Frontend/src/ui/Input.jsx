function Input({ value, label, type, onChange }) {
  return (
    <div className="input-box flex flex-col">
      <label>{label}</label>
      <input
        placeholder={`Enter ${label}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
