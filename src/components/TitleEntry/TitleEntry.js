import React from 'react';

export default function TitleEntry (props) {
    let note = props.notes.map((e, i) => {
        return (
            <p key={i}>{e.title}</p>
        )
    })
    return (
        <div>{note}</div>
    )
} 