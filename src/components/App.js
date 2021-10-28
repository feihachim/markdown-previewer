import { useState } from "react";
import "../styles/App.css";
import { SampleText } from "../datas/SampleText";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {
  const [text, updatedText] = useState(SampleText);

  return (
    <div className="App">
      <Editor sampleText={text} newText={updatedText} />
      <Preview preview={text} />
    </div>
  );
}

export default App;
