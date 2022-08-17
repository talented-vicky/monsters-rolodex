import './App.css';
import { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [ ],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // if handleChange isn't an arrow function

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log('error occured'))
  } 

  
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  } 

  render(){
    const { monsters, searchField} = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
     
    const filteredMonsters = monsters.filter(mons =>
      mons.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='Search Monster'
          checkChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
        {/* this cardlist component takes our class state as its props (or attribute)*/}
      </div>
    )
  }
}

export default App;
