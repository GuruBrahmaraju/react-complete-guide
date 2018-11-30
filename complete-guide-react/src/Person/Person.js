import React from 'react'
import '../index.css';
const person = (props) => {

 return(<div>
     {/* <p>I'm a Person ! {Math.floor(Math.random() * 30)} Years Old</p>
     <p>Guru is {Math.floor(Math.random() * 30)} Years Old</p>*/}
     <div className="person">
     <p >I am {props.name} and {props.age} Years Old</p> 
     <p>{props.children}</p>
     </div>
 </div> 
 )
};
 export default person;

