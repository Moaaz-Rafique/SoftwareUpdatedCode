import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { addNote, checkAuth } from "../config/firebaseconfig/firebaseMethods";
import SMButton from "../components/SMButton";

function AddNote() {
  const [markdownText, setMarkdownText] = useState("");
  const [title, setTitle] = useState("New Note");
  // const user = auth().currentUser;

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
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
      <div style={{ background: "#eee", minHeight: "300px" }}>
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {markdownText || "This is where your markdown will be rendered"}
        </ReactMarkdown>
      </div>
      <SMButton
        onClick={() => {
          const data = {
            title,
            markdownText,
          };

          console.log(data);
          let uid = null;
          checkAuth()
            .then((res) => {
              uid = res;
              if (uid) {
                addNote(`Notes/${uid || ""}`, data)
                  .then((res) => {
                    console.log("New note added successfully!", res);
                  })
                  .catch((error) => {
                    console.error("Error adding new note:", error);
                  });
              }
              else{
                alert("Sign-in to Add Notes")
              }
            })
            .catch((e) => console.log(e));
        }}
      >
        Save Notes
      </SMButton>
    </>
  );
}
export default AddNote;
