import React from 'react';
import './title-entry.css'

export default function TitleEntry (props) {
    let note = props.notes.map((e, i) => {
        return (
            <p className='title
            '
               key={i}
               onClick={() => props.selectNote(e)}>{e.title}</p>
        )
    })
    return (
        <div className='title-display-area'>{note}</div>
    )
}