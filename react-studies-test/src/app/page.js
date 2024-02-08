"use client"; // This is a client component  👈🏽
import { useState } from "react";
import { Counter } from "@/components/Counter";

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
  return (
    <h1 onClick={change}>
      Hello my name is {person.name}, I am {person.nationality} and was born in{" "}
      {person.year}.
    </h1>
  );
}
