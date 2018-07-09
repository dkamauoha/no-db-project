import React, { Component } from 'react';
import './note-to-display.css';

class NoteToDisplay extends Component {
    constructor () {
        super();
        this.state = {
            notes: [],
            title: '',
            note: '' 
        }
    }


    render () {
        console.log(this.props);
        return (
            <div className='note'>
                <div>
                    <p className='title-display'> {this.props.note ? this.props.note.title : 'No note displayed'} </p>
                    <p className='note-display'>{this.props.note ? this.props.note.note : 'No text displayed'}</p>
                </div>
                <div>
                    <button className='edit-button'>Edit</button>
                    <button className='delete-button'>Delete</button>
                </div>    
            </div>
        )
    }
}

export default NoteToDisplay;