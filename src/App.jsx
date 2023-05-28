import { useState } from "react";
import HeadingSection from "./component/heading";
import InputForm from "./component/inputForm";

const App = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  return (
    <div className="app">
      <HeadingSection />
      <div onClick={() => setFormDisplay(true)} className="panel-heading">
        Click to enter input content
      </div>
      {formDisplay && <InputForm setFormDisplay={setFormDisplay} />}
    </div>
  );
};

export default App;
