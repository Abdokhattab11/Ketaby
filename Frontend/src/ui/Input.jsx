function Input({ value, label, type, onChange, style, min, max }) {
  return (
    <div className="input-box flex flex-col">
      <label>{label}</label>
      <input
        required
        min={min}
        max={max}
        style={style}
        placeholder={`${type !== "number" ? `Enter ${label}` : "0"}`}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
