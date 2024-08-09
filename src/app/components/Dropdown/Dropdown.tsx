import "./Dropdown.scss";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <select
        title="select"
        name="Language"
        id="language"
        className="dropdown-select"
      >
        <option value="English">English </option>
        <option value="Hindi">हिन्दी </option>
      </select>
    </div>
  );
};

export default Dropdown;
