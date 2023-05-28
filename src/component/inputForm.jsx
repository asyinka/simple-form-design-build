const InputForm = ({ setFormDisplay }) => {
  return (
    <div className="app-form-bg" onClick={() => setFormDisplay(false)}>
      <form onClick={(event) => event.stopPropagation()} className="app-form">
        <label htmlFor="input">Type in your input</label>
        <input
          id="input"
          placeholder="Enter your text here..."
          className="form-input"
          type="text"
        />
        <button className="form-button">Click to add Input</button>
      </form>
    </div>
  );
};

export default InputForm;
