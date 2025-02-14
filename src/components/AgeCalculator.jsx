import React, { useState } from "react";
import "./AgeCalculator.css"; // Import the CSS file

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();

    if (!birthYear || isNaN(birthYear) || birthYear > currentYear) {
      setAge(null);
      setError("Invalid Year");
      return;
    }

    setAge(currentYear - birthYear);
    setError("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Age Calculator</h2>
        <input
          type="number"
          placeholder="Enter birth year"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        {error && <p className="error">{error}</p>}
        {age !== null && <p className="result">Your Age: {age}</p>}
      </div>
    </div>
  );
};

export default AgeCalculator;
