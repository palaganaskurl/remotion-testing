import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Editor from "./remotion/Timeline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Remotion Editor</h1>
      <Editor />
    </>
  );
}

export default App;
