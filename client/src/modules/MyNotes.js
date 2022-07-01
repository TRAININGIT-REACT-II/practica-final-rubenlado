import {useState } from "react";
import { useStore } from "react-redux";
import { useEffect } from "react";

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
              <li key={note.id}>{note.title} {note.content}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
