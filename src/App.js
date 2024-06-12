import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  function fetchAdvice() {
    axios
      .get("http://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button onClick={fetchAdvice} className="button">
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
