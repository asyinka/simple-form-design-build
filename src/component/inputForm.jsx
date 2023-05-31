import { useState } from "react";

const InputForm = ({
  setFormDisplay,
  textInput,
  setTextInput,
  nameInput,
  setNameInput,
  topicInput,
  setTopicInput,
  handleFormSubmission,
}) => {
  const handleNameInput = (e) => {
    return setNameInput(e.target.value);
  };

  const handleTextInput = (e) => {
    return setTextInput(e.target.value);
  };
  const handleTopicInput = (e) => {
    return setTopicInput(e.target.value);
  };

  const [isLight, setIsLight] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const turnLight = () => {
    setIsLight(!isLight);
    setIsDark(!isDark);
  };

  return (
    <div
      data-theme={isLight ? "light" : "dark"}
      className="app-form-bg"
      onClick={() => setFormDisplay(false)}
    >
      <form
        onSubmit={handleFormSubmission}
        onClick={(event) => event.stopPropagation()}
        className="app-form"
      >
        <div className="mode-icons">
          {isLight && <span onClick={turnLight}>&#9899;</span>}
          {isDark && (
            <span
              onClick={turnLight}
              className={isDark ? "mode-icons--after" : ""}
            >
              &#127774;
            </span>
          )}
        </div>

        <label htmlFor="name">Name/ID</label>
        <input
          id="name"
          placeholder="Enter your name/id here..."
          className="form-input"
          type="text"
          value={nameInput}
          maxLength={20}
          onChange={handleNameInput}
        />

        <label htmlFor="name">Article Topic</label>
        <input
          id="topic"
          placeholder="Enter your article topic..."
          className="form-input"
          type="text"
          maxLength={30}
          value={topicInput}
          onChange={handleTopicInput}
        />

        <label htmlFor="input">Article</label>
        <textarea
          id="input"
          placeholder="Enter your article here..."
          className="form-input"
          type="text"
          value={textInput}
          onChange={handleTextInput}
          maxLength={100}
        />
        <button className="form-button">Click to Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
