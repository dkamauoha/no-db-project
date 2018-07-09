import React, { Component } from 'react';
import axios from 'axios';
import './note-to-display.css';

class NoteToDisplay extends Component {
    constructor (props) {
        super(props);
        this.state = {
            notes: [],
            title: '',
            note: '',
            savedTitleInput: '',
            savedNoteInput: '' 
        }

    }

    // editTitle (val) {
    //     this.setState({
    //         savedTitleInput: val
    //     })
    // }

    // editNote (val) {
    //     this.setState({
    //         savedNoteInput: val
    //     })
    // }

    updateNote (id) {
        console.log(id);
        axios.put(`/api/notes/${id}`, {title: this.state.savedTitleInput, note: this.state.savedNoteInput, indexID: this.indexID})
             .then((results) => this.props.updateNotesFn(results.data));
    }

    deleteNote (id) {
        axios.delete(`/api/notes/${id}`)
             .then((response) => this.props.updateNotesFn(response.data));
        this.setState({
            
        })
    }

    render () {
        console.log(this.props);
        let {id} = this.props.note;
        console.log(this.indexID)
        return (
            <div className='note'>
                <div>
                    <input className='title-display'
                           type='text'
                           name='updateTitle'
                           value={this.props.updateTitle}
                           onChange={(e) => this.props.updateEditInputs(e)}/>
                    <input className='note-display'
                              type='text'
                              name='updateNote'
                              value={this.props.updateNote}
                              onChange={(e) => this.props.updateEditInputs(e)}/>
                </div>
                <div>
                    <button className='edit-button'
                            onClick={() => this.updateNote(id)}>Save</button>
                    <button className='delete-button'
                            onClick={() => this.deleteNote(id)}>Delete</button>
                </div>    
            </div>
        )
    }
}

export default NoteToDisplay;