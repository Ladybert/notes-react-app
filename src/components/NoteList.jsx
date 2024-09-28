import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, isArchived }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Terlihat jelas tidak ada catatan di sini :/</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} isArchived={isArchived}/>
      ))}
    </div>
  );
}

export default NoteList;
