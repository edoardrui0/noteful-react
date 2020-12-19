import React from "react";
import STORE from "../../store.js";

export default function ContentInfo() {
  const store = STORE.notes.map((note, i) => {
    return (
      <div key={i}>
        <p>{note.content}</p>
      </div>
    );
  });

  return <div className="contentInfo">{store}</div>;
}
