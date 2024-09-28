import React from 'react';
import { nanoid } from  'nanoid';
import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import NoteHeader from './NoteHeader';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: nanoid(16),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  onSearchHandler(query) {
    this.setState({ searchQuery: query })
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
    
    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);

    return (
      <div>
        <NoteHeader onSearch={this.onSearchHandler} />
        <div className="note-app__body">

        <NoteInput addNote={this.onAddNoteHandler} />

        <h2>Catatan Aktif</h2>
        <NoteList 
          notes={activeNotes} 
          onDelete={this.onDeleteHandler} 
          onArchive={this.onArchiveHandler} 
        />

        <h2>Catatan Arsip</h2>
        <NoteList 
          notes={archivedNotes} 
          onDelete={this.onDeleteHandler} 
          onArchive={this.onArchiveHandler} 
        />
        </div>
      </div>
    );
  }
}

export default NoteApp;
