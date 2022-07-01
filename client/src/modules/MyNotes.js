import { useState } from "react";
import { useStore } from "react-redux";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import DeleteModal from "../../utils/DeleteModal";
import "./MyNotes.css";

export const MyNotes = () => {
  const [notes, setNotes] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
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

  const deleteNote = (id) => {
    fetch("/api/notes/" + id, {
      method: "DELETE",
      headers: {
        apitoken: authData.auth.token,
      },
    }).then((res) => res.json());
  };

  const deleteConfirmation = (id) => {

    setShowModal(true);
    
    return (
        <DeleteModal show={showModal} onClose={closeModal}>
            <h3>¿Seguro que quieres borrar la nota?</h3>
            <p>Esta acción no se puede deshacer</p>
            <Button onClick={()=>deleteNote(id)}>
                Borrar
            </Button>
            <Button>
                Cerrar
            </Button>
        </DeleteModal>
    );
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
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.content}</Card.Text>
                <div className="note-button-container">
                  <Button variant="primary" size="sm" className="note-button">
                    Ver nota
                  </Button>
                  <Button variant="primary" size="sm" className="note-button">
                    Editar nota
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="note-button"
                    onClick={() =>deleteConfirmation(note.id)}
                  >
                    Borrar nota
                  </Button>
                </div>
              </Card.Body>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};