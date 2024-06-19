import React from 'react';
import Note from './Note';

const NotesGrid = ({ notes, onEdit, onPin, onDelete }) => (
  <div className="notes-grid">
    {notes.map(note => (
      <Note key={note.id} note={note} onClick={onEdit} onPin={onPin} onDelete={onDelete} />
    ))}
  </div>
);

export default NotesGrid;
