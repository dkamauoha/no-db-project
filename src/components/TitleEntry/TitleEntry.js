import React from 'react';
import DisplayTitle from './DisplayedTitle/DisplayedTitle'
import './title-entry.css'

export default function TitleEntry (props) {
    let note = props.notes.map((note, i) => {
        return (
            <DisplayTitle 
               className='title'
               key={i}
               note={note}
               selectNote={props.selectNote}
               title={note.title}/>
        )
    })
    return (
        <div className='title-display-area'>{note}</div>
    )
}