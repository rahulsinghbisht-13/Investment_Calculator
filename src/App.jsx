import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInputs.duration >= 1 && userInputs.duration <= 25;

  function handleUserInputChange(e) {
    setUserInputs((prevUserInputs) => {
      return {
        ...prevUserInputs,
        [e.target.id]: +e.target.value,
      };
    });
  }

  return (
    <>
      <UserInput
        onUserInputChange={handleUserInputChange}
        userInput={userInputs}
      />
      {inputIsValid ? (
        <Results input={userInputs} />
      ) : (
        <p className="center">Please enter valid duration (1-25)</p>
      )}
    </>
  );
}

export default App;
