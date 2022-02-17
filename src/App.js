import React, { useState, useEffect } from "react";
import { Home } from "./containers/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosDone, setTodosDone] = useState([]);

  useEffect(() => {
    const todosLocal = localStorage.getItem("todosLocal");
    const todosDoneLocal = localStorage.getItem("todosDoneLocal");

    if (todosLocal || todosDoneLocal) {
      setTodos(JSON.parse(todosLocal));
      setTodosDone(JSON.parse(todosDoneLocal));
    }
  }, []);

  return (
    <>
      <Header />
      <Home
        todos={todos}
        todosDone={todosDone}
        setTodosDone={setTodosDone}
        setTodos={setTodos}
      />
      <Footer />
    </>
  );
}

export default App;
