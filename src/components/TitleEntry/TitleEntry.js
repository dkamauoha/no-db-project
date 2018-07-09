import React from 'react';
import './title-entry.css'

export default function TitleEntry (props) {
    let note = props.notes.map((note, i) => {
        return (
            <p className='title'
               key={i}
               onClick={() => props.selectNote(note)}
            //    onClick={(note) => props.idToDelete(note.id)}
               >{note.title}</p>
        )
    })
    return (
        <div className='title-display-area'>{note}</div>
    )
}