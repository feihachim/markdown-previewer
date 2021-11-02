import { useState } from "react";
import "../styles/App.css";
import { SampleText } from "../datas/SampleText";
import Editor from "./Editor";
import Preview from "./Preview";
const marked = require("marked");

function App() {
  const [text, updatedText] = useState(SampleText);
  const markText = (str) => {
    return marked(str);
  };

  return (
    <div className="App">
      <Editor sampleText={text} newText={updatedText} />
      <Preview preview={markText(text)} />
    </div>
  );
}

export default App;
