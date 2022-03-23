import { useState } from "react";

function App() {
  const [name, setName] = useState("Sevim");
  const[friends, setFriends] = useState(["berkay","emirhan"]);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <button style={{marginRight: 5}} onClick={() => setName("Selin")}>Change</button>
      
      <h2>Friends</h2>

      {friends.map((friend, index) => (
      <div key={index}>{friend}</div>))}
      <button onClick={() => setFriends([...friends,"Vin"])}>isim ver</button>   
    </div>
  );
}

export default App;
