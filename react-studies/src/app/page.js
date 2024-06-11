"use client";
import { useState } from "react";
import { CustomModal } from "@/components/CustomModal";
import { PortalsAlertMessage } from "@/components/PortalsAlertMessage";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "pink",
        position: "relative",
        marginTop: "100px",
      }}
    >
      <h1>App Content</h1>
      <button
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
        Alert Message
      </PortalsAlertMessage>
    </div>
  );
}
