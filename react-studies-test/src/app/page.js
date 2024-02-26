"use client"; // This is a client component  👈🏽
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Home() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");

  // Bonus:
  // const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
  //   return "Default"
  // })

  // Bonus:
  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "Weight Lifting",
  ]);

  return (
    <>
      <div>
        <label>First Name</label>
        <input
          className="bg-blue-400"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Bonus: */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div> */}

      {/* Bonus: */}
      <div>{hobbies.join(", ")}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, "New Hobby"])
        }
      >
        Add Hobby
      </button>
    </>
  );
}
