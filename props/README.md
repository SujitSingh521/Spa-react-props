<!-- Example 1. -->
<!-- import React, { useState } from "react";
import "./App.css";
import LearnProps from "./components/LearnProps";

function App() {
  // State variables
  const [roll, setRoll] = useState(100);
  const [studentName, setStudentName] = useState("Sujit Kumar");
  
  // Function to change name and roll dynamically
  const changeDetails = () => {
    setRoll(roll + 2);
    setStudentName("John Doe");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the LearnProps App</h1>
        <LearnProps name={studentName} roll={roll} />
        <button onClick={changeDetails}>Change Details</button>
        <p>Click the button to change the student's name and roll number</p>
      </header>
    </div>
  );
}

export default App; -->

<!-- LernProps.jsx -->

<!-- import React from 'react';

function LearnProps({ name, roll }) {
  return (
    <div className="LearnProps">
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Roll Number: {roll}</p>
    </div>
  );
}

export default LearnProps; -->
