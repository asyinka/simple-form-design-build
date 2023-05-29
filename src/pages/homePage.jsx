import { useState } from "react";
import InputForm from "../component/inputForm";
import HeadingSection from "../component/heading";
import Badge from "../component/badge";

const HomePage = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  return (
    <div className="homePage">
      <HeadingSection />
      <Badge setFormDisplay={setFormDisplay} />
      <div className="inputsPanel">
        <div className="userName">{textInput}</div>
        <div className="userInput"> This is the input text</div>
      </div>

      {formDisplay && (
        <InputForm
          textInput={textInput}
          setTextInput={setTextInput}
          setFormDisplay={setFormDisplay}
          nameInput={nameInput}
          setNameInput={setNameInput}
        />
      )}
    </div>
  );
};

export default HomePage;
