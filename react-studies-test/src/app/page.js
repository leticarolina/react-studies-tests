"use client"; // This is a client component  👈🏽
import { FetchingUsers } from "@/components/FetchingUsers";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <h1>Users</h1>
      <FetchingUsers />
    </>
  );
}
