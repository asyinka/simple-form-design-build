import { useEffect, useState } from "react";
import InputForm from "../component/inputForm";
import HeadingSection from "../component/heading";
import Badge from "../component/badge";
import formDetails from "../services/inputs";

const formData = new formDetails();

const HomePage = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [formDetails, setFormDetails] = useState([]);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    formData.createFormData(nameInput, textInput);

    getFormDetails();

    setNameInput("");

    setTextInput("");

    // console.log(formDetails);

    setFormDisplay(false);
  };

  const getFormDetails = () => {
    const getFormData = formData.getFormDetails();

    setFormDetails(getFormData);

    return formDetails;
  };

  //this is used for clean-up of the first state value of getFormData which is empty on first call
  useEffect(() => getFormDetails, []);

  return (
    <div className="homePage">
      <HeadingSection />
      <Badge setFormDisplay={setFormDisplay} />
      <div className="inputCont">
        {formDetails.map((detail) => (
          <div key={detail.id} className="inputsPanel">
            <div className="userName">{detail.userName}</div>
            <div className="userInput">{detail.userText}</div>
          </div>
        ))}
      </div>

      {formDisplay && (
        <InputForm
          textInput={textInput}
          setTextInput={setTextInput}
          setFormDisplay={setFormDisplay}
          nameInput={nameInput}
          setNameInput={setNameInput}
          handleFormSubmission={handleFormSubmission}
        />
      )}
    </div>
  );
};

export default HomePage;
