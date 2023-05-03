
import './App.css';

import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

 function App() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <div className="App">
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
}
export default App;
