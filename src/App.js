import React, { Component } from 'react';
import './App.css';
import Movie from './components/movie';
import data from './components/data';

class App extends Component {
  state = {
    query: ''
  }

  searchText = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {

    let name = [];

    Object.keys(data).forEach(key => {
      name.push(data[key].title);

    })

    let newName = name.filter((movie) => {
      return movie.toLowerCase().indexOf(this.state.query) !== -1;
    })

    console.log(name);

    return (
      <div className="container">
        <div className="input-container">
          <label>Search for a Movie</label>
          <input type="text" onKeyUp={this.searchText} />
        </div>

        <div className="movies-container">

          {
            newName.map((movie, i) => {
              return <Movie name={movie} title={newName[i]}  key={i} />
            })
          }

        </div>


      </div>
    );
  }
}

export default App;