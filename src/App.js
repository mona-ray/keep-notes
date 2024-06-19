import React, { useState, useEffect } from 'react';
import NotesGrid from './components/NotesGrid';
import NoteEditor from './components/NoteEditor';
import Pagination from './components/Pagination';
import { GrAddCircle } from "react-icons/gr";
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const notesPerPage = 6;

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
    setLoading(false);
  }, []);

  const handleSaveNote = (note) => {
    const updatedNotes = note.id
      ? notes.map(n => (n.id === note.id ? { ...note, updatedAt: Date.now() } : n))
      : [...notes, { ...note, id: Date.now().toString(), pinned: false, createdAt: Date.now(), updatedAt: Date.now() }];

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handlePinNote = (note) => {
    const updatedNotes = notes.map(n =>
      n.id === note.id ? { ...n, pinned: !n.pinned, updatedAt: Date.now() } : n
    );
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter(n => n.id !== noteId);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  
  

  const currentNotes = notes
    .sort((a, b) => b.pinned - a.pinned || b.createdAt - a.createdAt)
    .slice(currentPage * notesPerPage, (currentPage + 1) * notesPerPage);

  return (
    <div className="container app">
      <div className="title">
      <h1>Keep Notes</h1>
      <button className="add-button" onClick={() => setSelectedNote({})}><GrAddCircle /></button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <NotesGrid notes={currentNotes} onEdit={setSelectedNote} onPin={handlePinNote} onDelete={handleDeleteNote}  />
          <div className="footer">
          <Pagination
            pageCount={Math.ceil(notes.length / notesPerPage)}
            onPageChange={handlePageClick}
          />
          </div>
        </>
        
      )}
      
      {selectedNote && (
        <div className="modal">
          <NoteEditor
            note={selectedNote}
            onSave={handleSaveNote}
            onClose={() => setSelectedNote(null)}
          />
        </div>
      )}
     
    
    </div>
  );
};

export default App;
