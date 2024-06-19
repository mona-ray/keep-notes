import React, { useState } from 'react';
import { BsFillPinAngleFill } from "react-icons/bs";
import { RiUnpinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Styling/Note.css';
import { Tooltip } from 'react-tooltip';

const Note = ({ note, onClick, onPin, onDelete }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="container note">
        <div className="note-header">
          <h2 data-tip={note.title} data-for={`title-tooltip-${note.id}`}>{note.title}</h2>
          <div className="left-corner">
            <button onClick={() => onPin(note)}>
              {note.pinned ? <RiUnpinFill /> : <BsFillPinAngleFill />}
            </button>
            <button onClick={() => onClick(note)}><FaEdit /></button>
          </div>
        </div>
        <div className="note-content" onClick={handlePopup}>
          <p data-tip={note.tagline} data-for={`tagline-tooltip-${note.id}`}>{note.tagline}</p>
        </div>
        <div className="note-footer">
          <button onClick={() => onDelete(note.id)}><MdDelete /></button>
        </div>
        <Tooltip id={`title-tooltip-${note.id}`} place="top" effect="solid" />
        <Tooltip id={`tagline-tooltip-${note.id}`} place="top" effect="solid" />
      </div>

      {showPopup && (
        <div className="note-popup">
          <div className="popup-header">
            <h2>{note.title}</h2>
            <button onClick={handlePopup}>&times;</button>
          </div>
          <div className="popup-content">
            <p>{note.tagline}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Note;
