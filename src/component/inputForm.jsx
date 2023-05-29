const InputForm = ({
  setFormDisplay,
  textInput,
  setTextInput,
  nameInput,
  setNameInput,
}) => {
  const handleNameInput = (e) => {
    return setNameInput(e.target.value);
  };

  const handleTextInput = (e) => {
    return setTextInput(e.target.value);
  };

  return (
    <div className="app-form-bg" onClick={() => setFormDisplay(false)}>
      <form onClick={(event) => event.stopPropagation()} className="app-form">
        <label htmlFor="name">Name/ID</label>
        <input
          id="name"
          placeholder="Enter your name/id here..."
          className="form-input"
          type="text"
          value={nameInput}
          onChange={handleNameInput}
        />
        <label htmlFor="input">Type in your input</label>
        <input
          id="input"
          placeholder="Enter your text here..."
          className="form-input"
          type="text"
          value={textInput}
          onChange={handleTextInput}
        />
        <button className="form-button">Click to add Input</button>
        {`text: ${textInput}`} {`name: ${nameInput}`}
      </form>
    </div>
  );
};

export default InputForm;
