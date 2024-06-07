import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("Press Button to Get Advice");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  return (
    <div className="main-box">
      <h2>{advice}</h2>
      <button className="btn" onClick={getAdvice}>
        Get Advice
      </button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of Advice.
    </p>
  );
}
