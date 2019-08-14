import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useInputField = (fieldName, placeholderText) => {
  const [state, setState] = useState("");
  const id = `use-Input-${fieldName.replace(" ", "").toLowerCase()}`;

  const InputField = () => (
    <label htmlFor={id}>
      {fieldName}
      <input id={id} placeholder={placeholderText} />
    </label>
  );
  return [state, InputField, setState];
};

function App() {
  const [firstName, FirstNameField] = useInputField(
    "First Name",
    "Enter a First Name"
  );
  const [LastName, LastNameField] = useInputField(
    "Last Name",
    "Enter a Last Name"
  );
  return (
    <div className="App">
      <h1>Custom hooks example</h1>
      <FirstNameField />
      <LastNameField />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
