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
      selected: null,
    }
    this.selectNote = this.selectNote.bind(this);
    this.addToNotes = this.addToNotes.bind(this);
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
  
    })
  }

  render() {
    // console.log(this.state.notes)
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
                selectNote={this.selectNote}/>
            </div>
            <div className='note-to-display'>
            <NoteToDisplay 
              note={this.state.selected}/>
            </div>  
          </div>
          
        </main>
      </div>
    );
  }
}

export default App;
