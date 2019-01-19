import React from "react";
import spinner from "./Double Ring-1.9s-200px.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "60px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}
