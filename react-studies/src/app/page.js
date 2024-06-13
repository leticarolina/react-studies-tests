"use client";
import { useRef, useState } from "react";
import { CustomModal } from "@/components/CustomModal";

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
