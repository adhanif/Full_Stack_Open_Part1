import React from "react";
import Part from "./Part";

export default function Content({ parts }) {
  return (
    <div>
      {parts.map((ele) => {
        return <Part ele={ele} key={ele.name} />;
      })}
    </div>
  );
}
