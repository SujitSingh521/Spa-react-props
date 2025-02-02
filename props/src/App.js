import "./App.css";
import LearnProps from "./components/LearnProps";

function App() {
  let roll=100;

  return (
    <div className="App">
      <LearnProps name="Sujit Kumar" roll={roll}/>
    </div>
  );
}

export default App;
