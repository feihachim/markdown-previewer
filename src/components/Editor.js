import "../styles/Editor.css";

function Editor({ sampleText, newText }) {
  return (
    <textarea
      id="editor"
      defaultValue={sampleText}
      onChange={(event) => newText(event.target.value)}
    ></textarea>
  );
}

export default Editor;
