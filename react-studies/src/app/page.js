"use client";
import { useRef, useState } from "react";
import { CustomModal } from "@/components/CustomModal";
import { PortalsAlertMessage } from "@/components/PortalsAlertMessage";
import Image from "next/image";
import { CustomFowardRefComponent } from "@/components/CustomFowardRefComponent";

export default function Home() {
  //ref is used when you want to store data but dont cause the component to re-render all the time
  //but if the ref will be in a component, Function components cannot be given refs unless with React.forwardRef()
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <CustomFowardRefComponent ref={inputRef}></CustomFowardRefComponent>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
