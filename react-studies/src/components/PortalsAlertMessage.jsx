//----------- React Portals (recoding previous study component file was lost)
//portals are basically used to rendwer an element outside of the hierarchy of the DOM.
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

//to create a portal need to use the ReactDOM.createPortal function , if you imported the portal from react-dom can just declare the function as CreatePortal
//This function createPortal()takes two arguments:1.the JSX you want to render, 2 the DOM node where you want to render it.

//this is the whole component for portal, typically takes three props
// children: The content that will be displayed inside the modal.
// onClose: A function that will be called to close the modal.
// isOpen: A boolean value that determines whether the modal is open or not.

export function PortalsAlertMessage({ children, onClose, isOpen }) {
  //in this example I am targetting a html element on the main pafe to render my portal
  //the useEffect hook is used to set the container after the component mounts. This ensures that document.querySelector("#portal-container") doesnt return null and runs only once and avoids unnecessary re-renders.
  const [container, setContainer] = useState(null);
  useEffect(() => {
    setContainer(document.querySelector("#portal-container"));
  }, []);

  // The PortalsAlertMessage component is conditionally rendered based on if the isOpen state is true
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "absolute",
        top: "200px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "lightBlue",
        padding: "20px",
        borderRadius: "5px",
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    container
  );
}
