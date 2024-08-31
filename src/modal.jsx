import { useEffect } from 'react';
import './style.css';

const Modal = ({ isOpen, onClose, text }) => {
    // Gestion de la fermeture du modal avec la touche Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
// Si isOpen est false, le modal ne s'affiche pas
  if (!isOpen) {
    return null;
  }

  return (
    <div className="blocker" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>X</button>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Modal;