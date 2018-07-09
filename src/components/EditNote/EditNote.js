import React, { Component } from 'react';

class EditNote extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>EditNote</div>
            // <p className='title-display'> {this.props.note ? this.props.note.title : 'No note displayed'} </p>
            // <p className='note-display'>{this.props.note ? this.props.note.note : 'No text displayed'}</p>
        )
    }
}

export default EditNote;