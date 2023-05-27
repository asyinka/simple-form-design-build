import HeadingSection from "./component/heading";
import InputForm from "./component/inputForm";

// import "./index.css";
const App = () => {
  return (
    <div className="app">
      <HeadingSection />
      <div className="panel-heading">Click to enter input content</div>
      <InputForm />
    </div>
  );
};

export default App;
