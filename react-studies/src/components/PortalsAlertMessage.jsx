//----------- React Portals (recoding previous study component file was lost)
//portals are basically used to rendwer an element outside of the hierarchy of the DOM.
import { useState } from "react";
const { createPortal } = require("react-dom");

//to create a portal need to use the ReactDOM.createPortal function , if you imported the portal from react-dom can just declare the function as CreatePortal
//This function takes two arguments: the JSX you want to render and the DOM node where you want to render it.

export function PortalsAlertMessage({ children, onClose, isOpen }) {
  //children is gonna be what is being rendered
  //onclose when modal is close, isOpen when true
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: "50%",
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
    document.querySelector("#portal-container")
  );
}
