import React from 'react';
import '../title-entry.css'

export default function DisplayTitle (props) {
    return <p className='title'
       onClick={() => props.selectNote(props.note)}>{props.title}</p>
}