import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useHistory } from "react-router-dom";
import {Card} from 'react-bootstrap';

export const NoteDetails = () => {
  const url = window.location.href.split("/");
  var noteId = url.at(4);

  const store = useStore();
  const authData = store.getState();

  const history = useHistory();

  const [noteValue, setNoteValue] = useState({title:"",body:"", author:""});

  const getNote = async () => {
    await fetch("/api/notes/" + noteId, {
        method: "GET",
        headers: {
          apitoken: authData.auth.token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((noteValues) => {
          setNoteValue({
            ...noteValue,
            title: noteValues.title,
            body: noteValues.content,
            author: noteValues.author.username
          });
        });
  };

  useEffect(() => {
    getNote();
  }, []);

  console.log(noteValue)
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{noteValue.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{noteValue.author}</Card.Subtitle>
                <Card.Text>
                        {noteValue.body}
                </Card.Text>
                <Card.Link href="/mynotes">Volver a mis notas</Card.Link>
            </Card.Body>
        </Card>
    </>
  );
};