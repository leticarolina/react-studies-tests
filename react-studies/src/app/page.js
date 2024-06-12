"use client";
import { useState } from "react";
import { CustomModal } from "@/components/CustomModal";
import { PortalsAlertMessage } from "@/components/PortalsAlertMessage";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      // position: relative on main div container to act as the reference for the modal's absolute position.
      style={{
        backgroundColor: "pink",
        position: "relative",
        marginTop: "100px",
      }}
    >
      {/* Rendering portal within a dedicated container in the main component: */}
      <div id="portal-container"></div>
      <h1>App Content</h1>
      <button
        // button change isOpen state, which controls the visibility of the modal
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Click to open Modal as a Portal
      </button>

      <PortalsAlertMessage
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        Alert Message this is the children prop on PortalsAlertMessage
        component.
      </PortalsAlertMessage>
    </div>
  );
}
