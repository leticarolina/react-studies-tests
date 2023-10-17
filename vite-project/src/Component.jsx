import { useState } from "react";

export function Component({ name, phone, status }) {
  return (
    <li>
      {name}, {phone}, {status}
    </li>
  );
}
