import { useState } from "react";
import "./App.css";
import Form from "./componentes/Form/form";
import List from "./componentes/List/List";
import Item from "./componentes/Item/Item";

function App() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let it = new Item(text);

    setItems([...items, it]);
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id != item.id);
    setItems(filteredItems);
  }

  function onDone(item) {
    let updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });

    setItems(updatedItems);
  }

  return (
    <div className="container">
      <h1>ToDo</h1>

      <Form onAddItem={onAddItem}></Form>

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
    </div>
  );
}

export default App;
