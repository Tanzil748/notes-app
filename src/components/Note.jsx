import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="noteFooter">
        <small>{date}</small>
        <AiFillDelete
          className="deleteIcon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
}

export default Note;
