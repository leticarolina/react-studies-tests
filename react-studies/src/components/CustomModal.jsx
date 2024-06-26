import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export function CustomModal({ children, isOpen, onClose }) {
  const [container, setContainer] = useState(null);
  useEffect(() => {
    setContainer(document.querySelector(".modal-overlay"));
  }, []);

  //To close the modal when the Escape key is pressed,  add an event listener for the keydown event and check if the pressed key is the Escape key.
  //If it is, you can call the onClose function to close the modal.

  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        padding: "1rem",
        background: "white",
        border: "1px solid black",
        zIndex: "1",
      }}
    >
      <p>This is a CUSTOM modal, being rendered using React Portal</p>
      <button onClick={onClose}>Close</button>
    </div>,
    container
  );
}

//on the main app js
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        data-custom-open
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Show Custom Modal
      </button>
      <br />
      <button data-dialog-open>Show Dialog Modal</button>
      <div className="modal-overlay"></div>
      <CustomModal isOpen={isOpen} onClose={onClose}></CustomModal>
    </div>
  );
}
