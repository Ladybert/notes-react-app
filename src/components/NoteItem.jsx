import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
    const handleDelete = () => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus catatan ini?');
        if (confirmDelete) {
          onDelete(id);
        }
    };
    const handleArchive = () => {
        const action = archived ? 'pindahkan' : 'arsipkan';
        const confirmArchive = window.confirm(`Apakah Anda yakin ingin ${action} catatan ini?`);

        if (confirmArchive) {
            onArchive(id);
        }
    };

  return (
    <div className="note-item">
        <div className='note-item__content'>
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
            <div className='note-item__action'>
                <button className="note-item__delete-button" onClick={handleDelete}>
                    Hapus
                </button>   
                <button className="note-item__archive-button" onClick={handleArchive}>
                    {archived ? 'Pindahkan' : 'Arsipkan'}
                </button>   
            </div>
        </div>
    </div>
  );
}

export default NoteItem;
