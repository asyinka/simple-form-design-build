const InputForm = () => {
  return (
    <form className="app-form">
      <label htmlFor="input">Type in your input</label>
      <input id="input" className="form-input" type="text" />
      <button className="form-button">Click to add Input</button>
    </form>
  );
};

export default InputForm;
