export default function UserInput({ onUserInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment.toString()}
            onChange={onUserInputChange}
            id="initialInvestment"
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment.toString()}
            onChange={onUserInputChange}
            id="annualInvestment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn.toString()}
            onChange={onUserInputChange}
            id="expectedReturn"
          />
        </p>

        <p>
          <label>Duration (years)</label>
          <input
            type="number"
            required
            value={userInput.duration.toString()}
            onChange={onUserInputChange}
            id="duration"
          />
        </p>
      </div>
    </section>
  );
}
