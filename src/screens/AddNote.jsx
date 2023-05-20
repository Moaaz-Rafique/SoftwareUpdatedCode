import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AddNote() {
  const [markdownText, setMarkdownText] = useState("");
  const [title, setTitle] = useState("New Note");

  return (
    <>
     <input value={title} onChange={e=>setTitle(e.target.value)} /> 
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
      <button onClick={()=>{
        console.log({
          title,
          markdownText,
        })
      }} >Save Note Notes</button>
    </>
  );
}
export default AddNote;
