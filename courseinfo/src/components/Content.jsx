import React from "react";

export default function Content({ courseContent }) {
  return (
    <div>
      {courseContent.map((ele) => {
        return (
          <p>
            {ele.name} {ele.exercises}
          </p>
        );
      })}
    </div>
  );
}
