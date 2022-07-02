import { createPortal } from "react-dom"; 
import { useEffect, useRef } from "react";

import "./DeleteModal.css";

const DeleteModal = ({ children, show, onClose }) => {

  const modalRef = useRef(null);
  const modalGroupRef = useRef(document.getElementById('modals'));
  useEffect(() => {
    const modalEl = document.createElement("div");
    modalEl.classList.add("modal-hidden");

    // lo agregamos al DOM manualmente
    modalGroupRef.current.appendChild(modalEl);
    // Guardamos la referencia
    modalRef.current = modalEl;
    return () => modalGroupRef.current.removeChild(modalRef.current);
  }, [])


  useEffect(() => {
    if (modalRef.current != null) {
      
      if (show) {
        modalRef.current.classList.remove("modal-hidden");
      } else {
        modalRef.current.classList.add("modal-hidden");
      }
    }
  }, [show])

  if (show && modalRef.current != null) {
    console.log("entra")
    return createPortal(
      <div role="dialog" aria-modal="true">
        <div className="modal-background" onClick={onClose}/>
        <div className="modal">
          <button 
            className="modal-close outline" 
            aria-label="Cerrar modal" 
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>,
      modalRef.current
    );
  } else {
    return null;
  }
};

export default DeleteModal;