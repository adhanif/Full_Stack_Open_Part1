import React from "react";

export default function Button({ handleEvent, feedback }) {
  return (
    <div>
      <button onClick={handleEvent}>{feedback}</button>
    </div>
  );
}
