import React from 'react'
import '../index.css';
const person = (props) => {

 return(<div>
     
     {/* we cant set at this place state */}
     {/* <p>I'm a Person ! {Math.floor(Math.random() * 30)} Years Old</p>
     <p>Guru is {Math.floor(Math.random() * 30)} Years Old</p>*/}
     <div className="person">
     <p onClick = {props.click}>I am {props.name} and {props.age} Years Old</p> 
     <p>{props.children}</p>
     </div>
 </div> 
 )
};
 export default person;

