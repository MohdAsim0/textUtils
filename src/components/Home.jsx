import { useState } from "react";

function Home() {
  const [input, setInput] = useState("");
  
  function rmExtraSpaces() {
    let temp = input.split(" ");
    let result = "";
    temp.forEach((item) => {
      if (item.length > 0) {
        result += item;
        result += " ";
      }
    });
    result = result.trim();
    setInput(result);
  }

  function copytoClipboard() {
    if (navigator) {
      navigator.clipboard.writeText(input);
      alert("Copied Successfully");
    }
  }
  return (
    <div className="container">
    <div class="box b"></div>
    <h1 className="head" >TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
      <h1>Enter your Text</h1>
      <br />
      <textarea
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      ></textarea>
      <br />

      <button onClick={() => setInput(input.toUpperCase())}>
        Conver Upper Case
      </button>
      <button onClick={() => setInput(input.toLowerCase())}>
        Conver Lower Case
      </button>
      <button onClick={() => setInput("")}>Clear Text</button>
      <button onClick={copytoClipboard}>Copy to Clipboard</button>
      <button onClick={rmExtraSpaces}>Remove Extra Spaces</button>
      <br />
      <div className="summary">
      <h1>Summary</h1>
      <p><strong>Number of Words: </strong>{input.split(" ").length} </p>
      <p><strong>Number of character:</strong> {input.length}</p>
      <p><strong>Reading Time:</strong> {input.split(" ").length * 0.0001} </p>
      </div>
      <h1 className="prev">Preview</h1>
      {/* <pre>{input}</pre> */}
      <textarea value={input} readOnly></textarea>
    </div>
  );
}
export default Home;