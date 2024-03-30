"use client"; // This is a client component  👈🏽
import {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import { createBrowserRouter } from "react-router-dom";
import { About } from "./About";
import { Route } from "next";
// const pageRoutes = createBrowserRouter([
//   { path: "/about", element: <About /> },
// ]);

export default function Home() {
  return "hi I am Main page";
}
