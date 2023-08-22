import React from "react";
const total = 0;
export default function Total({ parts }) {
  return (
    <div>
      Total Number of exercises{" "}
      {parts.reduce((acc, curr) => {
        return (acc += curr.exercises);
      }, 0)}
    </div>
  );
}
