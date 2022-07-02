import { useState } from "react";
import { useStore } from "react-redux";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import DeleteModal from "../../utils/DeleteModal";
import { useHistory } from "react-router-dom";
import { useModal } from "../hooks";
import "./MyNotes.css";

export const MyNotes = () => {
  const [notes, setNotes] = useState("");
  const { isShowing, open, close, selected } = useModal();
  const closeModal = () => setShowModal(false);
  const store = useStore();
  const authData = store.getState();
  const history = useHistory();
  const handleOnClickEdit = (id) => () => history.push(`/editNote/` + id);
  const handleOnClickCheck = (id) => () => history.push(`/checkNote/` + id);

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

  const NoteModal = ({ id }) => {
    return (
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                  Content for the dialog / modal goes here.
                </div>
                <div class="modal-footer">
                  <a href="#" data-dismiss="modal" class="btn">Close</a>
                  <a href="#" class="btn btn-primary">Save changes</a>
                </div>
              </div>
            </div>
        </div>
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
                  <Button variant="primary" size="sm" className="note-button" onClick={handleOnClickCheck(note.id)}>
                    Ver nota
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="note-button"
                    onClick={handleOnClickEdit(note.id)}
                  >
                    Editar nota
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="note-button"
                    onClick={() => open(note.id)}
                  >
                    Borrar nota
                  </Button>
                </div>
              </Card.Body>
            ))}
          </ul>
        )}
      </div>

      {isShowing && (<NoteModal id={selected} />)}
    </>
  );
};