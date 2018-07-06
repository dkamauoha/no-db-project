import React, { Component } from 'react';
import axios from 'axios';

class NewNote extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            note: '',
            titleSaved: '',
            noteSaved: '',
        }
    }

    buttonHandle () {
        this.setState({
            titleSaved: this.state.title,
            noteSaved: this.state.note
        })
        let {titleSaved, noteSaved} = this.state;
        axios.post('/api/notes', {title: titleSaved, note: noteSaved})
    }

    render() {
        return (
            <div>
                NewNote
                <input onChange={(e) => this.setState({title: e.target.value})}></input>
                <textarea onChange={e => this.setState({note: e.target.value})}></textarea>
                <button onClick={() => this.buttonHandle()}>Save</button>
            </div>
        )
    }
}

export default NewNote;