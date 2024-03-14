// App.js
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemContainer from "./components/ItemContainer";
import WelcomeMessage from "./components/WelcomeMessage";
import './App.css';
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = ({ itemName, itemDueDate }) => {
    if(itemName === "" || itemDueDate === "") return;
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length==0 &&<WelcomeMessage > </WelcomeMessage>}
      <ItemContainer todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
