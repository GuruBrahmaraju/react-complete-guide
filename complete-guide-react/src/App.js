import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
     <div className="App">
      <h1>Hi, I am React App</h1>
      <p>This is realy Working on the Paragraph</p>
      <Person name = 'Guru' age = '29'/>
      <Person name = 'Naveen' age = '28'>My Hobbies : Racing </Person>
      <Person name = 'Shiva' age = '26'/>
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
