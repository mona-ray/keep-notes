import React, { useState, useEffect } from 'react';
import './Styling/NoteEditor.css'

const NoteEditor = ({ note, onSave, onClose }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [tagline, setTagline] = useState(note?.tagline || '');
 
  useEffect(() => {
    if (note) { 
      setTitle(note.title);
      setTagline(note.tagline);
      
    }
  }, [note]);

  const handleSubmit = () => {
    onSave({ ...note, title, tagline});
    onClose();
  };

  return (
    <div className="note-editor">
      <form id="userForm">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        type="text"
        placeholder="Take a Note......."
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
     
      <br/>
      <div className="button-container">
      <button type="submit" onClick={handleSubmit}>Save</button>
      <button type="button" onClick={onClose} id="closeButton">&times;</button>
      </div>
      </form>
    </div>
  );
};

export default NoteEditor;
