import React from 'react';

function NoteHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes Gwraarrr</h1>
      <input 
        type="text" 
        placeholder="Cari catatan..." 
        onChange={(event) => onSearch(event.target.value)} 
      />
    </div>
  );
}

export default NoteHeader;
