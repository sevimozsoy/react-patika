import './App.css';
import Header from './components/Header';
import React from 'react';

const name = "sevim";
const surname = "ozsoy";

function App(){
// return React.createElement("div",null,"Hello");
  return(
    <>
      <Header/>
      <p className='denemePTag'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis atque incidunt earum temporibus nihil possimus, odit aperiam tempore sapiente totam quisquam voluptatum accusantium saepe cupiditate reprehenderit commodi sunt laudantium voluptates.
      </p>

      <h1>{name}</h1>
      <h1>{`Benim adım ${name} soyadım ${surname}`}</h1>

      <label htmlF or='myInput'>
        Name
        <input type="myInput" /></label>
        
    </>
  )
  

}

export default App;