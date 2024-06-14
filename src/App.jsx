import { useState } from "react";
import "./App.css";

function App() {
  const [className, setClassName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  console.log(items);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { className: className, value: inputValue };
    setItems([...items, newItem]);
    setClassName("");
    setInputValue("");
  }

  function handleDelete(index) {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {items.map((item, index) => (
        <div key={index} className="item">
          <h2>
            {item.className}: {item.value}
          </h2>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
