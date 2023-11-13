import { useState, useEffect } from "react";

export function Counter({ favoriteNumber }) {
  favoriteNumber < 5
    ? (favoriteNumber = <h1>my favorite number is {favoriteNumber}</h1>)
    : (favoriteNumber = null);

  return favoriteNumber;
}
