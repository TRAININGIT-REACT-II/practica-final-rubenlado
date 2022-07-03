import { useState } from "react";
import { useStore } from "react-redux";
import { useEffect } from "react";
import { Note } from "./Note";
import "./MyNotes.css";

export const MyNotes = () => {
  const [notes, setNotes] = useState("");
  const store = useStore();
  const authData = store.getState();
  
 
  const getNotes = () => {
    fetch("/api/notes", {
      method: "GET",
      headers: {
        apitoken: authData.auth.token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div>
        {notes.length > 0 && (
          <ul>
            {notes.map((note) => (
              <Note noteId={note.id} title={note.title} content={note.content}/>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};