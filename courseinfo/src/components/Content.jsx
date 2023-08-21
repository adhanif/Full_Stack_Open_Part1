import React from "react";
import Part from "./Part";

export default function Content({ courseContent }) {
  return (
    <div>
      {courseContent.map((ele) => {
        return <Part ele={ele} key={ele.name} />;
      })}
    </div>
  );
}
