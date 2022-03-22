import { useState } from "react";

function App() {
  const [name, setName] = useState("Sevim");
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <button style={{marginRight: 5}} onClick={() => setName("Selin")}>Change</button>
    </div>
  );
}

export default App;
