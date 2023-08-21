import React from "react";
const total = 0;
export default function Total({ courseContent }) {
  return (
    <div>
      Total Number of exercises{" "}
      {courseContent.reduce((acc, curr) => {
        return (acc += curr.exercises);
      }, 0)}
    </div>
  );
}
