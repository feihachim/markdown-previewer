import "../styles/Preview.css";
const marked = require("marked");

function Preview({ preview }) {
  function createMarkup() {
    return { __html: marked(preview) };
  }
  return <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>;
}

export default Preview;
