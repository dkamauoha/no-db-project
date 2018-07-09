import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Title from './components/Title/Title';
import TitleEntry from './components/TitleEntry/TitleEntry';
import EditNote from './components/EditNote/EditNote';
import NewNote from './components/NewNote/NewNote';
import NoteToDisplay from './components/NoteToDisplay/NoteToDisplay'

class App extends Component {
  constructor () {
    super();
    this.state = {
      notes: [],
      title: '',
      text: '',
      selected: {},
      updateTitle: '',
      updateNote: '',
    }
    this.selectNote = this.selectNote.bind(this);
    this.addToNotes = this.addToNotes.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
    this.updateEditInputs = this.updateEditInputs.bind(this);
  }

  componentDidMount () {
    axios.get('/api/notes').then(response => {
      console.log(response);
      this.setState({
        notes: response.data
      })
    })
  }

  addToNotes (response) {
    this.setState({
      notes: response
    })
  }

  selectNote (val) {
    this.setState({
      selected: val,
      updateTitle: val.title,
      updateNote: val.note,
    })
  }

  updateNotes (val) {
    this.setState({
      notes: val,
    })
  }

  updateEditInputs (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // idToDelete (num) {
  //   this.setState({
  //     deleteID: num
  //   })
  //   console.log(this.state.deleteID);
  // }

  render() {
    // console.log(this.state.notes)
    // console.log(this.state);
    return (
      <div className="App">
        <header>
          <Title />
        </header>
        <main>
          <NewNote notes={this.state.notes}
                   addToNotes={this.addToNotes}
                   selected={this.state.selected}/>
          <EditNote />
          <div className='display'>
            <div className='title-entry'>
              <TitleEntry
                notes={this.state.notes}
                selectNote={this.selectNote}
                // idToDelete={this.idToDelete}
                />
            </div>
            <div className='note-to-display'>
            <NoteToDisplay 
              note={this.state.selected}
              updateTitle={this.state.updateTitle}
              updateNote={this.state.updateNote}
              updateNotesFn={this.updateNotes}
              updateEditInputs={this.updateEditInputs}/>
            </div>  
          </div>
          
        </main>
      </div>
    );
  }
}

export default App;
