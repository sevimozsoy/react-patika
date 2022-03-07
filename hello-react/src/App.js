import './App.css';
import Header from './components/Header';
import React from 'react';
import User from './components/User';

const nameForConst = "sevim";
const surnameForConst = "ozsoy";
const isLoggedInForConst = false;

const friends = [
  {
    id:1,
    name: "vin",
  
  },
  {
    id:2,
    name: "emirhan",
  
  },
  {
    id:3,
    name: "sevim",
    
  },
];

function App() {
  // return React.createElement("div",null,"Hello");
  return (
    <>
      <Header />
      <p className='denemePTag'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis atque incidunt earum temporibus nihil possimus, odit aperiam tempore sapiente totam quisquam voluptatum accusantium saepe cupiditate reprehenderit commodi sunt laudantium voluptates.
      </p>

      <h1>{nameForConst}</h1>
      <h1>
        {isLoggedInForConst ? `Benim adım ${nameForConst} soyadım ${surnameForConst}` : "Giriş yapmadınız."}
        {/* {isLoggedIn &&`Benim adım ${name} soyadım ${surname}`}
      {!isLoggedIn && "Giriş yapmadınız."} */}

      </h1>

      <label htmlFor='myInput'>
        Name
        <input type="myInput" /></label>

    <User name="Sevim" surname="Özsoy" age={21} isLoggedIn={false} friends={friends}/>
    </>
  )


}

export default App;