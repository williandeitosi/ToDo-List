import { useState } from "react";
import "./App.css";
import Form from "./componentes/Form/form";
import List from "./componentes/List/List";
import Item from "./componentes/Item/Item";
import Modal from "./componentes/Modal/Modal";
import { useEffect } from "react";

const SAVED_ITEMS = "savedItems";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    let it = new Item(text);

    setItems([...items, it]);

    setShowModal(false);
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

  function onHideModal(e) {
    let target = e.target;
    if (target.id == "modal") {
      setShowModal(false);
    }
  }

  return (
    <div className="container">
      <header className="header">
        {" "}
        <h1>ToDo</h1>{" "}
        <button
          className="addbutton"
          onClick={() => {
            setShowModal(true);
          }}
        >
          +
        </button>
      </header>
      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <Form onAddItem={onAddItem}></Form>
      </Modal>
    </div>
  );
}

export default App;
