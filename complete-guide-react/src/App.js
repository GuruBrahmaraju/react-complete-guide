import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    //javascript Object {}
    persons : [
      {name : 'Max', age: 32},
      {name : 'Manu', age: 29},
      {name : 'Stephanie', age: 26}
    ],
    otherState : 'Some Other Value' 
  }

  switchNameHandler = (newName) => {
    //console.log("Welcome to Clicking the Button")
  // DONT DO THIS :this.state.persons[0].name = 'GuruBrahmaraju';
    this.setState({
      persons : [
        {name : newName, age: 31},
        {name : 'Manu', age: 29},
        {name : 'Stephanie', age: 27}
      ]
    })
}
  render() {
    return (
     <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is realy Working on the Paragraph</p>
      
      <button onClick = {this.switchNameHandler.bind(this, 'Maximilian')}>Switch Names</button><p>4</p>
      <button onClick = {() => this.switchNameHandler('Maximilian !!!')} >Switch ReturnFunction Name </button>
      <Person 
       name = {this.state.persons[0].name} 
       age = {this.state.persons[0].age} />
      <Person 
        name = {this.state.persons[1].name}
         age = {this.state.persons[1].age}
         click = {this.switchNameHandler.bind(this, 'Max!')}>
         My Hobbies : Racing</Person>
      <Person 
       name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age} />

      </div>
     );
    //Understanding the JSX
   // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this Work Now?'))
  // JSX Restraction
  //class, in jsx className in view it takes class not class name 
  // jsx need root extensation element 
  }
}

export default App; 
