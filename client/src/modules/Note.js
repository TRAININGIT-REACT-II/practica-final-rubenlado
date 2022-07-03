import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useStore } from "react-redux";
import {Card, Button, Modal} from 'react-bootstrap';
import { useModal } from "../hooks";
import { useHistory } from "react-router-dom";
import useApi from "../hooks/useApi";

export const Note = ({noteId, title, content}) => {
  const handleOnClickEdit = (noteId) => () => history.push(`/editNote/` + noteId);
  const handleOnClickCheck = (noteId) => () => history.push(`/checkNote/` + noteId);
  const { isShowing, open, close, selected } = useModal();
  const history = useHistory();
  const store = useStore();
  const authData = store.getState();

  const deleteNote = (id) => {

    const url = "/api/notes/" + id;
    const token =  authData.auth.token;

   // const data = useApi(url,token);
   //console.log(data)

    
    fetch(url, {
      method: "DELETE",
      headers: {
        apitoken:token,
      },
    }).then((res) => res.json());
    
    window.location.reload(true);
  };


  const NoteModal = ({ id }) => {
    return (
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>¿Seguro que quieres borrar la nota?</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Esta acción no se puede deshacer</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>close(id)}>Cerrar</Button>
          <Button variant="primary" onClick={()=>deleteNote(id)}>Eliminar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  };


  return (
    <>
        <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <div className="note-button-container">
                  <Button variant="primary" size="sm" className="note-button" onClick={handleOnClickCheck(noteId)}>
                    Ver nota
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="note-button"
                    onClick={handleOnClickEdit(noteId)}
                  >
                    Editar nota
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="note-button"
                    onClick={() => open(noteId)}
                  >
                    Borrar nota
                  </Button>
                </div>
              </Card.Body>

              {isShowing && (<NoteModal id={selected} />)}
    </>
  );
};