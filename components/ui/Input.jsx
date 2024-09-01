const Input = ({ handleChange, value, title, name, color, checked }) => {
  return (
    <label className="sidebar-label-container flex gap-1">
      <input
        onChange={() => handleChange(value)}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;