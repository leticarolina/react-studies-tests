"use client"; // This is a client component  👈🏽
import { useState } from "react";
import { Counter } from "@/components/Counter";
import { NameAndAge } from "@/components/NameAndAge";

export default function Home() {
  const [person, setPerson] = useState({
    name: "Leticia",
    year: 1997,
    nationality: "Brazilian",
  });

  function change() {
    setPerson((currentobj) => {
      return { ...currentobj, name: "Fernanda", age: 1993 };
    });
  }
  return <NameAndAge />;
}
