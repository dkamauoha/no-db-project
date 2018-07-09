import React, { Component } from 'react';
import axios from 'axios';
import './new-note.css'

class NewNote extends Component {
    constructor (props) {
        super(props);
        this.state = {
            notes: [],
            titleInput: '',
            noteInput: '',
            title: '',
            note: '',
            displayTitle: '',
            dislayNote: ''
        }
    }

    handleTitleInput (val) {
        this.setState({
            titleInput: val
        })
    }

    handleNoteInput (val) {
        this.setState({
            noteInput: val
        })
    }

    handleButton () {
        this.setState({
            title: this.state.titleInput,
            note: this.state.noteInput
        }, () => {
            axios.post('/api/notes', {title: this.state.title, note: this.state.note})
                 .then(response => this.props.addToNotes(response.data))
        })
    }

    render() {
        return (
            <div className='new-note'>
                <input placeholder='Insert Title Here' defaultValue={this.state.displayTitle} className='title-input' onChange={(e) => this.handleTitleInput(e.target.value)}></input>
                <textarea placeholder='Insert Note Here' defaultValue={this.state.dislayNote} className='note-input' onChange={e => this.handleNoteInput(e.target.value)}></textarea>
                <center><button 
                    className='save-note' 
                    onClick={() => this.handleButton()}>Save</button></center>
            </div>
        )
    }
}

export default NewNote;