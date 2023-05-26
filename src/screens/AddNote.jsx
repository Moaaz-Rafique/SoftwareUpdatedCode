import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { addNote, checkAuth, getNote } from "../config/firebaseconfig/firebaseMethods";
import SMButton from "../components/SMButton";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function AddNote() {
  const params = useParams()
  const navigator = useNavigate()
  const [markdownText, setMarkdownText] = useState("");
  const [title, setTitle] = useState("New Note");
  const [notes, setNotes] = useState([]);
  // const user = auth().currentUser;
  const { state } = useLocation();
  const noteId = params?.noteId;
  useEffect(() => {
    if (noteId) {
      getNote("Notes", noteId).then(res => {
        setTitle(res.title)
        setMarkdownText(res.markdownText)
      })
    }
    checkAuth()
      .then((res) => {
        const uid = res;
        if (uid) {
          getNote("Notes").then((notesData) => {
            const notesArray = notesData.filter((v) => v.uid == uid)
            // console.log('my notes data: ', notesArray);
            setNotes(notesArray);
            // for (let n of notesArray) {
            //   if (n.title == match[1]) {
            //     console.log(n, 'found');
            //   }
            // }
          });
        }
        else {
          // alert("Sign-in to Add Notes")
        }
      })
      .catch((e) => console.log(e));
  }, [])
  return (
    <>
      <div>
        <NavBar />
      </div>
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
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /link-(\w+)/.exec(children)
              let foundNote = false
              let noteId = null
              // console.log("matching ", match, children);
              if (match) {
                for (let n of notes) {
                  if (n.title == match[1]) {
                    // alert('found '+ JSON.stringify(n))
                    noteId = n.id
                    foundNote = true
                  }
                }
              }
              return match ? (
                <span
                  onClick={() => {
                    navigator('/AddNote/' + noteId);
                  }}

                  style={{ color: foundNote ? 'blue' : 'red' }}
                >
                  {match?.[1] || children}
                </span>
              ) : (

                <code {...props} className={className}>
                  {children}
                </code>

              )
            }
          }}


          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {markdownText || "This is where your markdown will be rendered"}
        </ReactMarkdown>
      </div>
      <SMButton
        onClick={() => {
          if (!title || !markdownText) {
            alert("Please fill all the fields")

            return
          }
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
                console.log("id", noteId)
                addNote(`Notes`, { ...data, uid }, noteId)
                  .then((res) => {
                    alert("Added a new note successfully")
                    navigator('/note/'+(res?.obj?.id || res?.id || noteId ||''))
                    console.log(res)
                    console.log("New note added successfully!", res);
                  })
                  .catch((error) => {
                    console.error("Error adding new note:", error);
                  });
              }
              else {
                alert("Sign-in to Add Notes")
              }
            })
            .catch((e) => console.log(e));
        }

        }
      >
        Save Note
      </SMButton>
    </>
  );
}
export default AddNote;
