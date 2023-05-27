import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import firebase from "../config/firebaseconfig/firebaseconfig"; // Assuming you have the Firebase instance initialized
import { checkAuth, getNote, deleteNote } from "../config/firebaseconfig/firebaseMethods";
import { Box, } from "@mui/system";
import { Button, } from "@mui/material";
import SMButton from "./SMButton";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";


const NotesList = () => {
  const navigator = useNavigate()
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Function to get notes from Firebase
    checkAuth()
      .then((res) => {
        const uid = res?.uid || res;
        if (getAuth().currentUser) {
          getNote("Notes").then((notesData) => {
            // console.log(JSON.stringify(notesData));
            const notesArray = notesData.filter((v) => v.uid == uid)
            // console.log('my notes data: ', notesArray);
            setNotes(notesArray);
            setLoading(false)
          }).catch(res=>alert(res))
        }
        else {
          setLoading(false)
          // alert("Sign-in to Add Notes")
        }
      })
      .catch((e) => console.log(e));


  }, []);


  return (
    <div>
      {/* <button onClick={() => console.log(getAuth().currentUser)} >get Auth</button> */}

      <h1 className="text-center">Notes List</h1>

      {!loading ?
        notes.length > 0 ? (
          <ul>

            {notes.map((note) => (
              // console.log(note.id)
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
                  //  boxShadow: "3px 3px 5px grey ",
                  borderRadius: "10px",
                  border: '1px solid black'
                }}
                key={note.id}
              >
                <h3 onClick={() => navigator('/note/' + note.id)}  >{note.title}</h3>
                <p>{note.markdownText}</p>

                <Button onClick={() => {
                    deleteNote(note.id)
                    navigator(0)
                  }} >delete</Button>
              </Box>
            ))}
          </ul>
        ) : (
          <p>No notes found.</p>
        ) : 'loading...'}
      <div className="text-center">

        <SMButton onClick={() => {
          navigator('/AddNote')
        }}

        >Add A new Note</SMButton>
      </div>
    </div>
  );
};

export default NotesList;
