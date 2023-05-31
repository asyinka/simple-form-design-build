import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [topicInput, setTopicInput] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (
      textInput.length == 0 ||
      nameInput.length == 0 ||
      topicInput.length == 0
    ) {
      toast("Please ensure all inputs are filled");

      return;
    }

    formData.createFormData(nameInput, textInput, topicInput);

    getFormDetails();

    setNameInput("");

    setTextInput("");

    setTopicInput("");

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
            <div className="userName">{` ${detail.id}. Author: ${detail.userName}`}</div>
            <div className="userInput">{`Topic: ${detail.userTopic}`}</div>
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
          topicInput={topicInput}
          setTopicInput={setTopicInput}
          handleFormSubmission={handleFormSubmission}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default HomePage;
