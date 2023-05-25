import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import firebase from "../config/firebaseconfig/firebaseconfig"; // Assuming you have the Firebase instance initialized
import { getNote } from "../config/firebaseconfig/firebaseMethods";
import { Box } from "@mui/system";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Function to get notes from Firebase

    // Call the getNotes function to fetch notes
    getNote("Notes").then((notesData) => {
      console.log(JSON.stringify(notesData));
      const notesArray = notesData.flatMap((note) =>
        Object.entries(note).map(([id, noteObj]) => ({
          id: noteObj.id || id,
          ...noteObj,
        }))
      );
      setNotes(notesArray);
    });
  }, []);

  return (
    <div>
      <h1>Notes List</h1>
      {notes.length > 0 ? (
        <ul>

          {notes.map((note) => (
         <Box
         display={"flex"}
         flexDirection={"column"}
        //  alignItems="center"
         justifyContent={"center"}
         margin={"auto"}
         marginTop={3}
         padding={5}
         maxWidth={400}
         sx={{
             boxShadow: "8px 8px 25px grey ",
             borderRadius: "25px",
         }}
         key={note.id}
     >
              <h3>{note.title}</h3>
              <p>{note.markdownText}</p>
        </Box>
          ))}
        </ul>
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

export default NotesList;
