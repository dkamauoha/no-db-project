import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Title from './components/Title/Title';
import TitleEntry from './components/TitleEntry/TitleEntry';
import EditNote from './components/EditNote/EditNote';
import NewNote from './components/NewNote/NewNote';

class App extends Component {
  constructor () {
    super();
    this.state = {
      notes: [],
      title: '',
      text: '',
      id: 0,
      selected: null,
    }
  }

  componentDidMount () {
    axios.get('/api/notes').then(response => {
      console.log(response);
      this.setState({
        notes: response.data
      })
    })
  }

  

  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <header>
          <Title />
        </header>
        <main>
          <NewNote />
          <EditNote />
          <TitleEntry notes={this.state.notes}/>
        </main>
      </div>
    );
  }
}

export default App;
