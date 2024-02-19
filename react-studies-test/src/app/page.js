"use client"; // This is a client component  👈🏽
import { TodoComponent } from "@/components/TodoComponent";
import { UserList } from "@/components/UserList";
//1. import hook
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const letiRef = useRef("leticia");

  useEffect(() => {
    console.log("Re-rendered"); //only on mount
  });

  return (
    <button
      onClick={() => {
        letiRef.current = Math.random();
        console.log(letiRef.current);
      }}
    >
      change ref value
    </button>
  );
}
