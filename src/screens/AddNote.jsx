import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AddNote() {
  const [markdownText, setMarkdownText] = useState("");

  return (
    <>
      <textarea
        // type="textarea"
        style={{ width: "100%" }}
        placeholder="Enter markdown"
        rows={10}
        value={markdownText}
        onChange={(e) => {
          console.log();
          setMarkdownText(e.target.value);
        }}
      />
      <div style={{background:"#eee", minHeight: '300px'}} >
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {markdownText || "This is where your markdown will be rendered"}
        </ReactMarkdown>
      </div>
    </>
  );
}
export default AddNote;
