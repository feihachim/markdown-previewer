import "../styles/Preview.css";

function Preview({ preview }) {
  function createMarkup() {
    return { __html: preview };
  }
  return <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>;
}

export default Preview;
