import { useState } from "react";

function App() {
  const [name, setName] = useState("Sevim");
  const [age,setAge] = useState(22);
  const[friends, setFriends] = useState(["berkay","emirhan"]);
  const[address, setAddress] = useState({title:"Isparta", zip:"32000"});
  // const [repCounter, setRepCounter] = useState(0);

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>Ben {age} yaşındayım!</h1>

      <button style={{marginRight: 5}} onClick={() => setName("Selin")}>Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>

      <hr />
      <br />
      
      <h2>Friends</h2>

      {friends.map((friend, index) => (
      <div key={index}>{friend}</div>))}
      <button onClick={() => setFriends([...friends,"Vin"])}>Add Friend</button> 

      <hr />
      <br />  

      <h3>Adres Bilgileri</h3>
      <div>Şehir:<b>{address.title}</b>, Zip kodu:<b>{address.zip}</b></div>

      <button onClick={() => setAddress({...address, title: "Marmaris"})}>Change Address</button> 

      <hr />
      <br />
    </div>
  );
}

export default App;
