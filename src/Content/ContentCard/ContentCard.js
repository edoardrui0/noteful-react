import React, { Component } from "react";
// import ContentInfo from "../ContentInfo/ContentInfo";
import STORE from "../../store";

const store = STORE.notes.map((note) => {
  console.log(note.modified.utc().format("MM/DD/YYYY"));
  //   figure out this bug^^^

  return (
    <ul key={note.id}>
      <li>
        {note.name}
        <p>{note.modified}</p>
      </li>
    </ul>
  );
});

class ContentCard extends Component {
  render() {
    return (
      <div className="contentCard">
        {store}
        {/* <ContentInfo /> */}
      </div>
    );
  }
}

export default ContentCard;
